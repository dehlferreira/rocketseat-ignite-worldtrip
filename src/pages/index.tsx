import Head from 'next/head';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <>
      <Head>
        <title>Woldtrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <Categories />
    </>
  );
}
