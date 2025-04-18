import { useEffect, useState } from "react";

import Image from "next/image";
import s from "./IntroduceBlock.module.scss";

const IntroduceBlock = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const onScroll = () => setPosition(pageYOffset);

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className={s.introduce}>
            <h1 className={s.title} style={{ top: `${position / 6}px` }}>
                Snayi
            </h1>
            <div className={s.avatar} style={{ top: `${position / 5}px` }}>
                <Image
                    src={"/images/avatar.jpg"}
                    width={350}
                    height={350}
                    alt={"Avatar Image"}
                />
                {/* <div className={s.status}>
                </div>
                <div className={s.statusText}>playing osu!</div> */}
            </div>
            <p className={s.subtitle} style={{ top: `${position / 3}px` }}>
                Front-end Developer
            </p>
            <div className={s.bottom}>
                <Image
                    src={"/images/intro-bottom.png"}
                    width={1440}
                    height={75}
                    alt={"Introduce background"}
                />
            </div>
            <div className={s.bg}>
                <Image
                    src={"/images/background-image.png"}
                    width={1440}
                    height={900}
                    alt={"Introduce background"}
                />
            </div>
        </section>
    );
};

export default IntroduceBlock;
