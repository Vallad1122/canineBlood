export default function AdministratorHeader() {
	return (
		<header className="border-b border-black/10 bg-white">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
						Canine Blood
					</p>
					<h1 className="text-xl font-bold text-neutral-900">
						Administrator Dashboard
					</h1>
				</div>

				<nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
					<a className="transition hover:text-neutral-900" href="#overview">
						Overview
					</a>
					<a className="transition hover:text-neutral-900" href="#requests">
						Requests
					</a>
					<a className="transition hover:text-neutral-900" href="#settings">
						Settings
					</a>
				</nav>

				<div className="text-right">
					<p className="text-sm font-semibold text-neutral-900">Administrator</p>
					<p className="text-xs text-neutral-500">admin@canineblood.vn</p>
				</div>
			</div>
		</header>
	);
}
