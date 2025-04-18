import { FC } from "react";
import { AboutMeComponent } from "../";

interface AdminPageSwitcherProps {
    page: string | string[] | undefined;
}

const AdminPageSwitcher: FC<AdminPageSwitcherProps> = ({ page }) => {
    switch (page) {
        case "about-me":
            return <AboutMeComponent />;

        default:
            return <></>;
    }
};

export default AdminPageSwitcher;
