import { useRouter } from "next/router";
import Head from "next/head";

import { AdminWrapper } from "@/components";
import { AdminAside, AdminPageSwitcher } from '@/components/AdminPageComponents';

const index = () => {

    const router = useRouter();

    const { page } = router.query;

  return (
    <>
        <Head>
            <title>Snayi Admin Page: {page}</title>
        </Head>
        <AdminWrapper>
            <AdminAside />
            <AdminPageSwitcher page={page} />
        </AdminWrapper>
    </>
  )
}

export default index