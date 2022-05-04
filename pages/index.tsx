import Head from 'next/head';
import Layout, { siteTitle } from '../layout/layout';
import utilStyles from '../styles/utils.module.css';

export default function  Home() {
  return (
    <Layout  Children= {<>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> i am a full stack engineer learning how to build with nextJS</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      </>
    } home={true}/>
  );
}