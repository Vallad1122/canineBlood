import styles from "./owner_dashboard.module.css";

export default function OwnerInformation() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Welcome back, Dog Owner</h1>
            <p className={styles.heroSubtitle}>
                Track your dogs, submit new registration records, and stay updated on blood-drive alerts from trusted clinics.
            </p>

            <div className={styles.metrics}>
                <div className={styles.metricCard}>
                    <p className={styles.metricLabel}>Registered dogs</p>
                    <p className={styles.metricValue}>3</p>
                </div>
                <div className={styles.metricCard}>
                    <p className={styles.metricLabel}>New notifications</p>
                    <p className={styles.metricValue}>1</p>
                </div>
                <div className={styles.metricCard}>
                    <p className={styles.metricLabel}>Closest donor camp</p>
                    <p className={styles.metricValue}>2.4 km</p>
                </div>
            </div>
        </section>
    );
}