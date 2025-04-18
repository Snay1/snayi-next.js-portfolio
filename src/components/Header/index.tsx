import { FC, useEffect, useState } from "react";
import s from "./Header.module.scss";
import TimeComponent from "./TimeComponent";

const navItems = [
    { title: "github", link: "https://github.com/Snay1" },
    { title: "tg", link: "https://t.me/snayiii" },
];

const Header: FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [page, setPage] = useState("/");

    useEffect(() => {
        document.body.classList[isActive ? "add" : "remove"]("_lock");
        setPage(document.location.pathname);
    }, [isActive]);

    return (
        <>
            <header className={`${s.header} ${isActive ? s.active : ""}`}>
                <div className={s.content}>
                    <nav className={s.navigation}>
                        <ul className={s.navigationItems}>
                            {navItems &&
                                navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={
                                            item.link === page ? s.active : ""
                                        }
                                    >
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                </div>
                <TimeComponent />
            </header>
            <div
                className={s.burgerButton}
                onClick={() => setIsActive(!isActive)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};

export default Header;
