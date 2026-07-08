  
import Image from "next/image";
import Link from "next/link";
import styles from "./owner_dashboard.module.css";

export default function OwnerNavigation() {
    return (
        <header className={styles.topBar}>
            <div className={styles.brandWrap}>
                <Image src="/images/logo.png" alt="Canine Blood logo" width={92} height={34} className={styles.logo} />
                <div className={styles.brandText}>
                    <p className={styles.brandTitle}>Canine Blood</p>
                    <p className={styles.brandTag}>Owner Command Center</p>
                </div>
            </div>

            <nav className={styles.navLinks}>
                <Link href="/landing_page" className={styles.ghostLink}>Home</Link>
                <Link href="/authenticate/login" className={styles.ghostLink}>Switch account</Link>
            </nav>
        </header>
    );
}