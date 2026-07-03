import AdministratorHeader from "./component/administrator_header";
import AdministratorAction from "./component/administator _action";

export default function Administrator() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <AdministratorHeader />
            <AdministratorAction />
        </main>
    );
}