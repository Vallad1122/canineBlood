"use client";

import { useState } from "react";
import Link from "next/link";
import {
	validateClinicContactDetails,
	validateClinicEmail,
	validateClinicName,
	validateClinicPassword,
	validateClinicConfirmPassword,
} from "./validation_vet_clinic";

const fieldGuidance = [
	"Clinic Name - Required; 2-100 characters",
	"Clinic Contact Details - Required; valid Australian phone number or email address",
	"Email Address - Required; valid email format; must be unique and used as username",
	"Password - Required; minimum 8 characters; include uppercase, lowercase, number, and special character",
	"Confirm Password - Required; must match password",
];

export default function VetClinicRegistration() {
	const [clinicName, setClinicName] = useState("");
	const [clinicNameError, setClinicNameError] = useState("");
	const [clinicContactDetails, setClinicContactDetails] = useState("");
	const [clinicContactDetailsError, setClinicContactDetailsError] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");
	const [submitError, setSubmitError] = useState("");
	const [submitSuccess, setSubmitSuccess] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitError("");
		setSubmitSuccess("");

		const clinicNameValidationError = validateClinicName(clinicName);
		const clinicContactDetailsValidationError = validateClinicContactDetails(clinicContactDetails);
		const emailValidationError = validateClinicEmail(email);
		const passwordValidationError = validateClinicPassword(password);
		const confirmPasswordValidationError = validateClinicConfirmPassword(confirmPassword, password);

		setClinicNameError(clinicNameValidationError ?? "");
		setClinicContactDetailsError(clinicContactDetailsValidationError ?? "");
		setEmailError(emailValidationError ?? "");
		setPasswordError(passwordValidationError ?? "");
		setConfirmPasswordError(confirmPasswordValidationError ?? "");

		if (
			clinicNameValidationError ||
			clinicContactDetailsValidationError ||
			emailValidationError ||
			passwordValidationError ||
			confirmPasswordValidationError
		) {
			return;
		}

		try {
			setIsSubmitting(true);
			const response = await fetch("/api/registration/vet_clinic", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					clinicName,
					clinicContactDetails,
					email,
					password,
					confirmPassword,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				if (data?.errors) {
					setClinicNameError(data.errors.clinicName ?? "");
					setClinicContactDetailsError(data.errors.clinicContactDetails ?? "");
					setEmailError(data.errors.email ?? "");
					setPasswordError(data.errors.password ?? "");
					setConfirmPasswordError(data.errors.confirmPassword ?? "");
					setSubmitError("Please fix the highlighted fields.");
				} else {
					setSubmitError(data?.error ?? "Registration failed.");
				}
				return;
			}

			setSubmitSuccess(data?.message ?? "Registration successful.");
			setClinicName("");
			setClinicContactDetails("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			setClinicNameError("");
			setClinicContactDetailsError("");
			setEmailError("");
			setPasswordError("");
			setConfirmPasswordError("");
		} catch {
			setSubmitError("Unable to submit right now. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-6 py-12">
			<div className="grid w-full gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr]">
				<div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Canine Blood</p>
					<h1 className="mt-3 text-3xl font-bold">Veterinary Clinic Registration Form</h1>
					<p className="mt-4 text-sm leading-6 text-red-100">
						Allows veterinary clinics to register with the system so they can submit blood donation requests.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-neutral-900">Register as Vet Clinic</h2>
					<p className="mt-2 text-sm text-neutral-600">
						Please complete the fields below.
					</p>

					<ul className="mt-6 space-y-3 rounded-2xl border border-black/10 bg-neutral-50 p-5 text-sm leading-6 text-neutral-700">
						{fieldGuidance.map((item) => (
							<li key={item} className="flex gap-3">
								<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
								<span>{item}</span>
							</li>
						))}
					</ul>

					<form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
						{submitError ? <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{submitError}</p> : null}
						{submitSuccess ? <p className="rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700">{submitSuccess}</p> : null}

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Clinic Name</span>
							<input
								type="text"
								value={clinicName}
								onChange={(event) => setClinicName(event.target.value)}
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Clinic name"
							/>
							{clinicNameError ? <p className="mt-2 text-sm text-red-600">{clinicNameError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Clinic Contact Details</span>
							<input
								type="text"
								value={clinicContactDetails}
								onChange={(event) => setClinicContactDetails(event.target.value)}
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Phone number or contact email"
							/>
							{clinicContactDetailsError ? <p className="mt-2 text-sm text-red-600">{clinicContactDetailsError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Email Address</span>
							<input
								type="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="clinic@example.com"
							/>
							{emailError ? <p className="mt-2 text-sm text-red-600">{emailError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Password</span>
							<input
								type="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Create password"
							/>
							{passwordError ? <p className="mt-2 text-sm text-red-600">{passwordError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Confirm Password</span>
							<input
								type="password"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Repeat password"
							/>
							{confirmPasswordError ? <p className="mt-2 text-sm text-red-600">{confirmPasswordError}</p> : null}
						</label>

						<div className="flex flex-col gap-3">
							<button type="submit" disabled={isSubmitting} className="rounded-xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70">
								{isSubmitting ? "Registering..." : "Register Vet Clinic"}
							</button>
							<div className="flex items-center justify-between gap-4">
								<Link href="/authenticate/registration" className="text-sm font-semibold text-red-700 transition hover:text-red-800">
									Back to role selection
								</Link>
								<Link href="/authenticate/login" className="text-sm font-semibold text-red-700 transition hover:text-red-800">
									Login
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}