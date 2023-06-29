import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Vaxholm() {
  return (
    <Layout>
    <Head>
        <title>QUAY - Vaxholm</title>
    </Head>
    <h1>Vaxholm</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </Layout>
  );
}