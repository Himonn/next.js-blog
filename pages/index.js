import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
      <Layout home>
          <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <section className={utilStyles.headingMd}>
            <p>Hello I'm <b>Simon</b>, this is my demo next.js blog which I am using to practice the framework</p>
            <p>My ultimate goal is to build a chess board and functioning chess application without the use of a pre-built library</p>
          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>{title}</Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}