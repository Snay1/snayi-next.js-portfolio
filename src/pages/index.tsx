import Head from 'next/head';

import { PageTemplate } from '../components';
import { IntroduceBlock, AboutMe, SkillsBlock } from '@/components/MainPageComponents/';

export default function Home() {
  return (
    <>
        <Head>
            <title>Snayi Next.js Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageTemplate>
            <IntroduceBlock />
            {/* <AboutMe /> */}
            <SkillsBlock />
        </PageTemplate>
    </>
  )
}
