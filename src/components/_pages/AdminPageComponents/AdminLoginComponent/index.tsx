import { SyntheticEvent, useState } from "react";

import axios from "@/axios";

import s from "./AdminLoginComponent.module.scss";
import { FormButton } from "@/components";

const AdminLoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post("/auth/login", {
                email,
                password,
            });

            if (!res.data || !res.data.success) {
                throw Error();
            }

            window.localStorage.setItem(
                "snayi-portfolio-token",
                res.data.result.token,
            );
            document.location.reload();
        } catch (error) {
            alert("Неверный логин или пароль");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={s.loginBlock}>
            <form className={s.form} onSubmit={submitHandler}>
                <h2>Login</h2>
                <div className={s.line}></div>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                />
                <FormButton disabled={loading} text="login" />
            </form>
        </div>
    );
};

export default AdminLoginComponent;
