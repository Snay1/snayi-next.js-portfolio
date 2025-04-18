import { useState, useEffect, FC } from "react";
import axios from "@/axios";
import s from "./AdminWrapper.module.scss";

import { AdminLoginComponent } from "../_pages/AdminPageComponents";

interface AdminWrapperProps {
    children: React.ReactNode;
}

const AdminWrapper: FC<AdminWrapperProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const getMeHandler = () => {
        axios
            .get("/auth/getMe")
            .then((res) => {
                setIsAuth(res && res.data && res.data.success);
            })
            .catch((e) => {
                console.warn(e);
                setIsAuth(false);
            });
    };

    useEffect(() => {
        getMeHandler();
    }, [isAuth]);

    if (!isAuth) {
        return <AdminLoginComponent />;
    }

    return <div className={s.wrapper}>{children}</div>;
};

export default AdminWrapper;
