"use client";

import { useState } from "react";
import Link from "next/link";
import {
  validateFirstName,
  validateLastName,
  validateMobileNumber,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validateHomeAddress
} from "./validation_dog_owner";

const fieldGuidance = [
	"First Name - Required; alphabetic characters only; 2-50 characters",
	"Last Name - Required; alphabetic characters only; 2-50 characters",
	"Mobile Number - Required; valid Australian format (10 digits, starts with 04)",
	"Email Address - Required; valid email format; must be unique",
	"Home Address - Required; street, suburb, state, postcode; postcode must be 4 digits",
	"Password - Required; minimum 8 characters; include uppercase, lowercase, number, and special character",
	"Confirm Password - Required; must match password",
];

export default function DogOwnerRegistration() {
	const [firstName, setFirstName] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastName, setLastName] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [mobileNumberError, setMobileNumberError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [homeAddressError, setHomeAddressError] = useState("");
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

		const firstNameValidationError = validateFirstName(firstName);
		const lastNameValidationError = validateLastName(lastName);
		const mobileNumberValidationError = validateMobileNumber(mobileNumber);
        const emailValidationError = validateEmail(email);
        const homeAddressValidationError = validateHomeAddress(homeAddress);
        const passwordValidationError = validatePassword(password);
        const confirmPasswordValidationError = validateConfirmPassword(confirmPassword, password);

		setFirstNameError(firstNameValidationError ?? "");
		setLastNameError(lastNameValidationError ?? "");
		setMobileNumberError(mobileNumberValidationError ?? "");
        setEmailError(emailValidationError ?? "");
        setHomeAddressError(homeAddressValidationError ?? "");
        setPasswordError(passwordValidationError ?? "");
        setConfirmPasswordError(confirmPasswordValidationError ?? "");
		if (firstNameValidationError || lastNameValidationError || mobileNumberValidationError || emailValidationError || homeAddressValidationError || passwordValidationError || confirmPasswordValidationError) {
			return;
		}

		try {
			setIsSubmitting(true);
			const response = await fetch("/api/registration/dog_owner", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					mobileNumber,
					email,
					homeAddress,
					password,
					confirmPassword,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				if (data?.errors) {
					setFirstNameError(data.errors.firstName ?? "");
					setLastNameError(data.errors.lastName ?? "");
					setMobileNumberError(data.errors.mobileNumber ?? "");
					setEmailError(data.errors.email ?? "");
					setHomeAddressError(data.errors.homeAddress ?? "");
					setPasswordError(data.errors.password ?? "");
					setConfirmPasswordError(data.errors.confirmPassword ?? "");
					setSubmitError("Please fix the highlighted fields.");
				} else {
					setSubmitError(data?.error ?? "Registration failed.");
				}
				return;
			}

			setSubmitSuccess(data?.message ?? "Registration successful.");
			setFirstName("");
			setLastName("");
			setMobileNumber("");
			setEmail("");
			setHomeAddress("");
			setPassword("");
			setConfirmPassword("");
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
					<h1 className="mt-3 text-3xl font-bold">Dog Owner Registration Form</h1>
					<p className="mt-4 text-sm leading-6 text-red-100">
						Allows dog owners to register with the system so they can enrol their dogs as
						potential blood donors and be contacted as part of the donation process.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-neutral-900">Register as Dog Owner</h2>
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

					<form
						className="mt-6 grid gap-4 sm:grid-cols-2"
						onSubmit={handleSubmit}
					>
						{submitError ? <p className="sm:col-span-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{submitError}</p> : null}
						{submitSuccess ? <p className="sm:col-span-2 rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700">{submitSuccess}</p> : null}
						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">First Name</span>
							<input
								type="text"
								value={firstName}
								onChange={(event) => setFirstName(event.target.value)}
                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="First name"
							/>
							{firstNameError ? <p className="mt-2 text-sm text-red-600">{firstNameError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Last Name</span>
							<input
								type="text"
								value={lastName}
								onChange={(event) => setLastName(event.target.value)}
                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Last name"
							/>
							{lastNameError ? <p className="mt-2 text-sm text-red-600">{lastNameError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Mobile Number</span>
							<input
								type="tel"
								value={mobileNumber}
								onChange={(event) => setMobileNumber(event.target.value)}
                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500 sm:col-span-1"
								placeholder="04xxxxxxxx"
							/>
							{mobileNumberError ? <p className="mt-2 text-sm text-red-600">{mobileNumberError}</p> : null}
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Email Address</span>
							<input
								type="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="you@example.com"
							/>
							{emailError ? <p className="mt-2 text-sm text-red-600">{emailError}</p> : null}
						</label>

						<label className="block sm:col-span-2">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Home Address</span>
							<input
								type="text"
								value={homeAddress}
								onChange={(event) => setHomeAddress(event.target.value)}
                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
								placeholder="Street, suburb, state, postcode"
							/>
							{homeAddressError ? <p className="mt-2 text-sm text-red-600">{homeAddressError}</p> : null}
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

						<div className="sm:col-span-2 flex flex-col gap-3">
							<button type="submit" disabled={isSubmitting} className="rounded-xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70">
								{isSubmitting ? "Registering..." : "Register Dog Owner"}
							</button>
							<Link href="/authenticate/registration" className="text-center text-sm font-semibold text-red-700 transition hover:text-red-800">
								Back to role selection
							</Link>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}