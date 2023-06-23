import s from "./PageTemplate.module.scss";

import { Footer, Header } from "../";

interface PageTemplateInterface {
    children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateInterface) => {
    return (
        <div className={s.wrapper}>
            <Header />
            <main className={s.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default PageTemplate;
