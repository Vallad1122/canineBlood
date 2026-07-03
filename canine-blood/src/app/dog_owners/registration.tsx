"use client";

import { useState } from "react";

type FormData = {
	firstName: string;
	lastName: string;
	street: string;
	suburb: string;
	city: string;
	postcode: string;
	phoneNumber: string;
	password: string;
	repeatPassword: string;
};

const initialFormData: FormData = {
	firstName: "",
	lastName: "",
	street: "",
	suburb: "",
	city: "",
	postcode: "",
	phoneNumber: "",
	password: "",
	repeatPassword: "",
};

export default function RegistrationForm() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [error, setError] = useState("");

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;

		setFormData((current) => ({
			...current,
			[name]: value,
		}));
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (formData.password !== formData.repeatPassword) {
			setError("Passwords do not match.");
			return;
		}

		setError("");
		console.log(formData);
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-red-50 to-white px-6 py-12">
			<form
				onSubmit={handleSubmit}
				className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-lg"
			>
				<header className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Dog Owner Registration</h1>
					<p className="mt-2 text-sm text-gray-600">
						Enter your details to create an owner account.
					</p>
				</header>

				<div className="grid gap-6 md:grid-cols-2">
					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">First Name</span>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter first name"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">Last Name</span>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter last name"
							required
						/>
					</label>

					<label className="flex flex-col gap-2 md:col-span-2">
						<span className="text-sm font-medium text-gray-700">Street</span>
						<input
							type="text"
							name="street"
							value={formData.street}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Street address"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">Suburb</span>
						<input
							type="text"
							name="suburb"
							value={formData.suburb}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter suburb"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">City</span>
						<input
							type="text"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter city"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">Postcode</span>
						<input
							type="text"
							name="postcode"
							value={formData.postcode}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter postcode"
							required
						/>
					</label>

					<label className="flex flex-col gap-2 md:col-span-2">
						<span className="text-sm font-medium text-gray-700">Phone Number</span>
						<input
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Enter phone number"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">Password</span>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Create password"
							required
						/>
					</label>

					<label className="flex flex-col gap-2">
						<span className="text-sm font-medium text-gray-700">Repeat Password</span>
						<input
							type="password"
							name="repeatPassword"
							value={formData.repeatPassword}
							onChange={handleChange}
							className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
							placeholder="Repeat password"
							required
						/>
					</label>
				</div>

				{error ? (
					<p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
						{error}
					</p>
				) : null}

				<button
					type="submit"
					className="mt-8 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
				>
					Register
				</button>
			</form>
		</main>
	);
}
