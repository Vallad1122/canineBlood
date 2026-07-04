import { NextResponse } from "next/server";
import { randomBytes, scryptSync } from "node:crypto";
import { db } from "@/lib/db";

type Body = {
	clinicName?: string;
	clinicContactDetails?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
};

function hashPassword(password: string): string {
	const salt = randomBytes(16).toString("hex");
	const hashedPassword = scryptSync(password, salt, 64).toString("hex");
	return `${salt}:${hashedPassword}`;
}

function validate(body: Body) {
	const errors: Record<string, string> = {};
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phonePattern = /^(?:\+61|0)\d{9,10}$/;

	const clinicName = body.clinicName?.trim() ?? "";
	if (!clinicName) {
		errors.clinicName = "Clinic Name is required.";
	} else if (clinicName.length < 2 || clinicName.length > 100) {
		errors.clinicName = "Clinic Name must be between 2 and 100 characters.";
	}

	const clinicContactDetails = body.clinicContactDetails?.trim() ?? "";
	const normalizedContactDetails = clinicContactDetails.replace(/\s+/g, "");
	if (!clinicContactDetails) {
		errors.clinicContactDetails = "Clinic Contact Details are required.";
	} else if (!emailPattern.test(clinicContactDetails) && !phonePattern.test(normalizedContactDetails)) {
		errors.clinicContactDetails = "Clinic Contact Details must be a valid Australian phone number or email address.";
	}

	const email = body.email?.trim() ?? "";
	if (!email) {
		errors.email = "Email Address is required.";
	} else if (!emailPattern.test(email)) {
		errors.email = "Email Address must be a valid email format.";
	}

	const password = body.password ?? "";
	if (!password) {
		errors.password = "Password is required.";
	} else if (password.length < 8) {
		errors.password = "Password must be at least 8 characters long.";
	} else if (!/[A-Z]/.test(password)) {
		errors.password = "Password must contain at least one uppercase letter.";
	} else if (!/[a-z]/.test(password)) {
		errors.password = "Password must contain at least one lowercase letter.";
	} else if (!/[0-9]/.test(password)) {
		errors.password = "Password must contain at least one number.";
	} else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
		errors.password = "Password must contain at least one special character.";
	}

	const confirmPassword = body.confirmPassword ?? "";
	if (!confirmPassword) {
		errors.confirmPassword = "Confirm Password is required.";
	} else if (confirmPassword !== password) {
		errors.confirmPassword = "Passwords do not match.";
	}

	return errors;
}

export async function POST(request: Request) {
	try {
		const body: Body = await request.json();
		const errors = validate(body);

		if (Object.keys(errors).length > 0) {
			return NextResponse.json({ errors }, { status: 400 });
		}

		const email = body.email!.trim().toLowerCase();

		const [existingEmail] = await db.query("SELECT id FROM vet_clinics WHERE email = ?", [email]);
		if (Array.isArray(existingEmail) && existingEmail.length > 0) {
			return NextResponse.json({ error: "Email address is already registered." }, { status: 409 });
		}

		const hashedPassword = hashPassword(body.password!);

		await db.query(
			"INSERT INTO vet_clinics (clinic_name, clinic_contact_details, email, hashed_password) VALUES (?, ?, ?, ?)",
			[body.clinicName, body.clinicContactDetails, email, hashedPassword]
		);

		return NextResponse.json({ message: "Registration successful." }, { status: 200 });
	} catch (error) {
		console.error("Error during clinic registration:", error);
		const message = process.env.NODE_ENV === "development" && error instanceof Error
			? error.message
			: "Internal Server Error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}