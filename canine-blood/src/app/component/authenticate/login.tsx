import Link from "next/link";

export default function Login() {
	return (
		<section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-6 py-12">
			<div className="grid w-full gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
				<div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Canine Blood</p>
					<h1 className="mt-3 text-3xl font-bold">Login to continue</h1>
					<p className="mt-4 max-w-md text-sm leading-6 text-red-100">
						Access your donor dashboard, manage requests, and coordinate with clinics in one place.
					</p>
				</div>

				<div className="flex flex-col justify-center">
					<h2 className="text-2xl font-bold text-neutral-900">Sign in</h2>
					<p className="mt-2 text-sm text-neutral-600">
						Enter your email and password to continue.
					</p>

					<form className="mt-6 space-y-4">
						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Email</span>
							<input
								type="email"
								placeholder="you@example.com"
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-red-500"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm font-medium text-neutral-700">Password</span>
							<input
								type="password"
								placeholder="••••••••"
								className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-red-500"
							/>
						</label>

						<button
							type="submit"
							className="w-full rounded-xl bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
						>
							Login
						</button>
					</form>

					<p className="mt-6 text-sm text-neutral-600">
						Don&apos;t have an account?{" "}
						<Link href="/authenticate/registration" className="font-semibold text-red-700 transition hover:text-red-800">
							Registration
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}