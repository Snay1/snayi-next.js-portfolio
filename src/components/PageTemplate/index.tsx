import s from "./PageTemplate.module.scss";

import { Footer, Header } from "../";
import { FC } from "react";

interface PageTemplateProps {
    children: React.ReactNode;
}

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
    return (
        <div className={s.wrapper}>
            <Header />
            <main className={s.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default PageTemplate;
