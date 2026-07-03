import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="border-b border-black/10 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                        Under construction
                    </p>
                    <h1 className="text-xl font-bold text-neutral-900">
                        Canine Blood
                    </h1>
                </div>

                <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
                    <a className="transition hover:text-neutral-900" href="#resources">
                        Resources
                    </a>
                    <a className="transition hover:text-neutral-900" href="#about">
                        About Us
                    </a>
                    <a className="transition hover:text-neutral-900" href="#contact">
                        Contact
                    </a>
                    <Link className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800" href="/authenticate/login">
                        Login
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900">
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
}
