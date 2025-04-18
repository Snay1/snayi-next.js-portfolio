import { FC } from "react";
import s from "./AdminTemplate.module.scss";

interface AdminTemplateProps {
    children: React.ReactNode;
}

const AdminTemplate: FC<AdminTemplateProps> = ({ children }) => {
    return <div className={s.template}>{children}</div>;
};

export default AdminTemplate;
