import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

import { getAllPostIds, getPostData } from '../../lib/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  // return {
  //   redirect: {
  //     destination: '/',
  //     permanent: true // triggers 308
  //   }
  // }

  // return {
  //   notFound: true // triggers 404
  // }

  return {
    props: {
      postData
    }
  }
}

