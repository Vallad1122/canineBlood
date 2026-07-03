const actions = [
	{
		title: "Dog Donor Registration",
		description: "Review and approve new dog donor profiles.",
		href: "#dog-donor-registration",
	},
	{
		title: "View Blood Requests",
		description: "Check urgent and pending blood requests from clinics.",
		href: "#blood-requests",
	},
	{
		title: "Manage Appointments",
		description: "Track upcoming donor screenings and transfusion schedules.",
		href: "#appointments",
	},
	{
		title: "View Reports",
		description: "Open registration, inventory, and donation activity reports.",
		href: "#reports",
	},
];

export default function AdministratorAction() {
	return (
		<section id="overview" className="mx-auto w-full max-w-6xl px-6 py-8">
			<div className="mb-5 flex items-end justify-between gap-4">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
						Quick Actions
					</p>
					<h2 className="text-2xl font-bold text-neutral-900">
						Administrator Workspace
					</h2>
				</div>
				<p className="max-w-md text-sm text-neutral-500">
					Use these shortcuts to handle daily donor registration and blood request operations.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{actions.map((action) => (
					<a
						key={action.title}
						href={action.href}
						className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
					>
						<h3 className="mb-2 text-lg font-semibold text-neutral-900">
							{action.title}
						</h3>
						<p className="mb-4 text-sm leading-6 text-neutral-600">
							{action.description}
						</p>
						<span className="text-sm font-semibold text-red-700">Open</span>
					</a>
				))}
			</div>
		</section>
	);
}
