import Head from "next/head";

import { PageTemplate } from "@/components";
import {
    IntroduceBlock,
    AboutMe,
    SkillsBlock,
    WorksBlock,
} from "@/components/MainPageComponents/";

export default function Home() {
    return (
        <>
            <Head>
                <title>Snayi Next.js Portfolio</title>
                <meta name="description" content="Snayi next.js portfolio" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageTemplate>
                <IntroduceBlock />
                <AboutMe />
                <SkillsBlock />
                <WorksBlock />
            </PageTemplate>
        </>
    );
}
