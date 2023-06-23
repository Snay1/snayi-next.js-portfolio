import { useState, useEffect } from "react";
import axios from "@/axios";
import s from "./AdminWrapper.module.scss";

import { AdminLoginComponent } from "../AdminPageComponents";

interface AdminWrapperInterface {
    children: React.ReactNode;
}

const AdminWrapper = ({ children }: AdminWrapperInterface) => {
    const [isAuth, setIsAuth] = useState(false);

    const getMeHandler = () => {
        axios
            .get("/auth/getMe")
            .then((res) => {
                if (res && res.data && res.data.success) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
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
