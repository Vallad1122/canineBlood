import Link from "next/link";
import styles from "./owner_dashboard.module.css";

export default function OwnerAction() {

    return (
        <section className={styles.actionGrid}>
            <Link href="/my_dogs" className={styles.actionCard}>
                <p className={styles.actionTitle}>My Dogs</p>
                <p className={styles.actionDesc}>Review profiles, blood type, and donation history.</p>
            </Link>

            <Link href="/register_dog" className={styles.actionCard}>
                <p className={styles.actionTitle}>Register New Dog</p>
                <p className={styles.actionDesc}>Add health records and donor eligibility details.</p>
            </Link>

            <Link href="/notifications" className={styles.actionCard}>
                <p className={styles.actionTitle}>View Notifications</p>
                <p className={styles.actionDesc}>See clinic requests and urgent blood alerts.</p>
            </Link>
        </section>
    );

}