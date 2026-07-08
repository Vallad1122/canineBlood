  
import Image from "next/image";

export default function OwnerNavigation() {
    return (
        <div>
            <a href="/landing_page">Home</a>
            <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="logo" />
        </div>
    );
}