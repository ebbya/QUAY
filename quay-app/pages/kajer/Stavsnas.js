import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Stavsnas() {
  return (
    <Layout>
    <Head>
        <title>QUAY - Stavsnäs</title>
    </Head>
    <h1>Stavsnäs</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </Layout>
  );
}

