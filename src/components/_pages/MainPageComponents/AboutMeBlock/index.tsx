import Image from "next/image";
import s from "./AboutMeBlock.module.scss";

const AboutMeBlock = () => {
    return (
        <section className={`${s.about} _section`}>
            <div className={`${s.content} container`}>
                <h2 className={`_title`}>about me</h2>
                <div className={s.info}>
                    <div className={s.img}>
                        <Image
                            src={"/images/about-img.png"}
                            width={542}
                            height={717}
                            alt="About Image"
                        />
                    </div>
                    <p className={s.text}>
                        Hi! I am FrontEnd developer from Saint Petersburg. I
                        have been engaged in FrontEnd development since october
                        2021. My skills are that i have practical experience in
                        the development of big projects. My current stack:
                        Next.js/React.js + TypeScript + Redux Toolkit + React
                        Query. Also I have a big experience in site layout
                        making.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMeBlock;
