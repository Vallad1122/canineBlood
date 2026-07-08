import OwnerInformation from "@/app/component/user_page/dog_owner/owner_information";
import OwnerAction from "@/app/component/user_page/dog_owner/owner_action";
import OwnerNavigation from "@/app/component/user_page/dog_owner/owner_navigation";
import React from "react";

export default function OwnerPage() {
    return (
        <>
            <OwnerNavigation />
            <OwnerInformation />
            <OwnerAction />
        </>
    );
}