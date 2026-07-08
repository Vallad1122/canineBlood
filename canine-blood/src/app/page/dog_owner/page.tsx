import OwnerInformation from "@/app/component/user_page/dog_owner/owner_information";
import OwnerAction from "@/app/component/user_page/dog_owner/owner_action";
import OwnerNavigation from "@/app/component/user_page/dog_owner/owner_navigation";
import styles from "@/app/component/user_page/dog_owner/owner_dashboard.module.css";
import React from "react";

export default function OwnerPage() {
    return (
        <main className={styles.page}>
            <div className={styles.shell}>
                <OwnerNavigation />
                <OwnerInformation />
                <OwnerAction />
            </div>
        </main>
    );
}