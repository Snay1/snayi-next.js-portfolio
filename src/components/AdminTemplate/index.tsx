import s from "./AdminTemplate.module.scss";

interface IAdminTemplate {
    children: React.ReactNode;
}

const AdminTemplate = ({ children }: IAdminTemplate) => {
    return <div className={s.template}>{children}</div>;
};

export default AdminTemplate;
