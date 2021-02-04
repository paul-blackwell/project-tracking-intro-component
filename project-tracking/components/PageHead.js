import Head from 'next/head';

const PageHead = (props) => (
    <Head>
        <title>{props.title}</title>
        <link rel='icon' href='/images/favicon-32x32.png' />
    </Head>
);

export default PageHead;