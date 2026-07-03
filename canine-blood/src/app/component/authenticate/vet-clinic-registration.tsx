import Link from "next/link";

export default function VetClinicRegistration() {
	return (
		<section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center px-6 py-12">
			<div className="w-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">Canine Blood</p>
				<h1 className="mt-3 text-3xl font-bold text-neutral-900">Vet Clinic Registration</h1>
				<p className="mt-3 text-sm leading-6 text-neutral-600">
					This flow will be built later for clinic representatives.
				</p>

				<div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-6 text-sm text-neutral-600">
					For now, this is a placeholder page so the registration choice has a real destination.
				</div>

				<div className="mt-6 flex items-center gap-4">
					<Link href="/authenticate/registration" className="text-sm font-semibold text-red-700 transition hover:text-red-800">
						Back to role selection
					</Link>
					<Link href="/authenticate/login" className="text-sm font-semibold text-red-700 transition hover:text-red-800">
						Login
					</Link>
				</div>
			</div>
		</section>
	);
}