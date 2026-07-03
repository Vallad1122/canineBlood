import Link from "next/link";

export default function Registration() {
	return (
		<section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-6 py-12">
			<div className="grid w-full gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr]">
				<div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Canine Blood</p>
					<h1 className="mt-3 text-3xl font-bold">Choose your account type</h1>
					<p className="mt-4 max-w-md text-sm leading-6 text-red-100">
						Start by telling us whether you are a dog owner or a vet clinic representative.
					</p>
				</div>

				<div className="flex flex-col justify-center">
					<h2 className="text-2xl font-bold text-neutral-900">Registration</h2>
					<p className="mt-2 text-sm text-neutral-600">
						Select the registration path that matches your role.
					</p>

					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						<Link
							href="/authenticate/registration/dog-owner"
							className="rounded-2xl border border-black/10 bg-neutral-50 p-5 transition hover:border-red-300 hover:bg-red-50"
						>
							<p className="text-sm font-semibold text-neutral-900">Dog Owner</p>
							<p className="mt-2 text-sm leading-6 text-neutral-600">
								Register yourself and your dog as a potential blood donor.
							</p>
						</Link>

						<Link
							href="/authenticate/registration/vet-clinic"
							className="rounded-2xl border border-black/10 bg-neutral-50 p-5 transition hover:border-red-300 hover:bg-red-50"
						>
							<p className="text-sm font-semibold text-neutral-900">Vet Clinic Representative</p>
							<p className="mt-2 text-sm leading-6 text-neutral-600">
								Register a clinic account for later vet-side onboarding.
							</p>
						</Link>
					</div>

					<p className="mt-6 text-sm text-neutral-600">
						Already have an account?{" "}
						<Link href="/authenticate/login" className="font-semibold text-red-700 transition hover:text-red-800">
							Login
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}