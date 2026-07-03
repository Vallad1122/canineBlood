import { NextResponse } from "next/server";
import { randomBytes, scryptSync } from "node:crypto";
import { db } from "@/lib/db";

type Body = {
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    email?: string;
    homeAddress?: string;
    password?: string;
    confirmPassword?: string;
};

function hashPassword(password: string): string {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");
    return `${salt}:${hashedPassword}`;
}

function validate(body: Body){
    const errors: Record<string, string> = {};

    const firstName = body.firstName?.trim() ?? "";
    if (!firstName) {
        errors.firstName = "First Name is required.";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        errors.firstName = "First Name must contain alphabetic characters only.";
    } else if (firstName.length < 2 || firstName.length > 50) {
        errors.firstName = "First Name must be between 2 and 50 characters.";
    }

    const lastName = body.lastName?.trim() ?? "";
    if (!lastName) {
        errors.lastName = "Last Name is required.";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
        errors.lastName = "Last Name must contain alphabetic characters only.";
    } else if (lastName.length < 2 || lastName.length > 50) {
        errors.lastName = "Last Name must be between 2 and 50 characters.";
    }

    const mobileNumber = body.mobileNumber?.trim() ?? "";
    if (!mobileNumber) {
        errors.mobileNumber = "Mobile Number is required.";
    } else if (!/^04\d{8}$/.test(mobileNumber)) {
        errors.mobileNumber = "Mobile Number must be a valid Australian format (10 digits, starts with 04).";
    } else if (mobileNumber.length !== 10) {
        errors.mobileNumber = "Mobile Number must be exactly 10 digits.";
    }

    const email = body.email?.trim() ?? "";
    if (!email) {
        errors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Email Address must be a valid email format.";
    }

    const homeAddress = body.homeAddress?.trim() ?? "";
    if (!homeAddress) {
        errors.homeAddress = "Home Address is required.";
    }

    const password = body.password ?? "";
    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
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

        const [existingEmail] = await db.query("SELECT id FROM dog_owners WHERE email = ?", [email]);
        
        if (Array.isArray(existingEmail) && existingEmail.length > 0) {
            return NextResponse.json({ error: "Email address is already registered." }, { status: 409 });
        }

        // Hash the password before storing it in the database
        const hashedPassword = hashPassword(body.password!);

        const [result] = await db.query(
            "INSERT INTO dog_owners (first_name, last_name, mobile_number, email, home_address, hashed_password) VALUES (?, ?, ?, ?, ?, ?)",
            [body.firstName, body.lastName, body.mobileNumber, email, body.homeAddress, hashedPassword]
        );


        return NextResponse.json({ message: "Registration successful" }, { status: 200 });
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}