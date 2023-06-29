import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Stromkajen() {
  return (
    <Layout>
    <Head>
        <title>QUAY - Strömkajen</title>
    </Head>
    <h1>Strömkajen</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </Layout>
  );
}

