export default function Footer() {
	return (
		<footer id="contact" className="border-t border-black/10 bg-neutral-950 text-neutral-200">
			<div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Canine Blood</p>
					<h3 className="mt-2 text-lg font-bold text-white">Better blood access for dogs in need</h3>
					<p className="mt-3 text-sm leading-6 text-neutral-400">
						We connect dog owners, veterinary clinics, and staff to coordinate safe and timely canine blood donation.
					</p>
				</div>

				<div>
					<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-300">Quick Links</h4>
					<ul className="mt-3 space-y-2 text-sm text-neutral-400">
						<li><a className="transition hover:text-white" href="#about">About</a></li>
						<li><a className="transition hover:text-white" href="#resources">Resources</a></li>
						<li><a className="transition hover:text-white" href="#login">Login</a></li>
					</ul>
				</div>

				<div>
					<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-300">Contact</h4>
					<ul className="mt-3 space-y-2 text-sm text-neutral-400">
						<li>Email: support@canineblood.vn</li>
						<li>Phone: +84 28 1234 5678</li>
						<li>Hours: Mon - Sat, 08:00 - 19:00</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10 px-6 py-4 text-center text-xs text-neutral-500">
				Copyright {new Date().getFullYear()} Canine Blood. All rights reserved.
			</div>
		</footer>
	);
}
