import { useState } from "react";
import IconSelector, { IconType } from "../IconSelector";
import s from "./Footer.module.scss";

type SocialsItem = {
    title: string;
    icon: IconType;
    link: string;
}

const socials: SocialsItem[] = [
    {
        title: "github",
        icon: "githubIcon",
        link: "https://github.com/Snay1",
    },
    {
        title: "twitch",
        icon: "twitchIcon",
        link: "https://www.twitch.tv/snayi",
    },
];

const Footer: React.FC = () => {

    const [currentYear] = useState(new Date().getFullYear());

    return (
        <footer className={s.footer}>
            <div className={`${s.content} _container`}>
                <p>snayi portfolio © {currentYear}</p>
                <ul className={s.socials}>
                    {socials &&
                        socials.map((social) => (
                            <li key={social.title}>
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconSelector icon={social.icon} />
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
