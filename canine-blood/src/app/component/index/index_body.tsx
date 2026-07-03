export default function index_body() {
    return (
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
                <h2 className="text-center text-3xl font-bold text-neutral-900">Welcome to Canine Blood</h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
                    Canine Blood is a coordination platform that connects dog owners, veterinary clinics,
                    and internal staff to make blood donation for dogs faster, safer, and easier to track.
                    Our goal is to reduce emergency response time and improve outcomes for dogs in need.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    <article className="rounded-xl border border-red-100 bg-red-50 p-5">
                        <h3 className="text-lg font-semibold text-red-900">Dog Owner</h3>
                        <p className="mt-2 text-sm leading-6 text-red-900/80">
                            Register your dog profile, receive eligibility guidance, and submit donation
                            availability. Owners can also view donation history and emergency requests nearby.
                        </p>
                    </article>

                    <article className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                        <h3 className="text-lg font-semibold text-amber-900">Clinic Vet</h3>
                        <p className="mt-2 text-sm leading-6 text-amber-900/80">
                            Verify donor suitability, create blood requests, and monitor matching candidates
                            based on blood type and health status. Vets can update treatment and transfusion
                            outcomes in one workflow.
                        </p>
                    </article>

                    <article className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                        <h3 className="text-lg font-semibold text-blue-900">Staff</h3>
                        <p className="mt-2 text-sm leading-6 text-blue-900/80">
                            Manage records, coordinate communication between owners and clinics, and supervise
                            request status. Staff keep the system reliable by ensuring data quality and fast
                            response during urgent cases.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}
