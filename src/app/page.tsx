import { redirect } from 'next/navigation';
import Head from 'next/head';

export default function RootPage() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
        </>
    );
}
