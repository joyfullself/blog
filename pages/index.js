import Head from 'next/head'
import { FeaturedPosts } from '../sections/index';
import {PostCard, Subscribe, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import ScrollToTop from "react-scroll-to-top";

// const posts = [
//   { title: 'Post1', excerpt: 'Post1 Excerpt'},
//   { title: 'Post2', excerpt: 'Post2 Excerpt'},
// ];

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mt-8 px-8">
      <Head>
        <title>Joyfullself</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ScrollToTop smooth color="#D97706" width="28" height="28" viewBox="-50 0 256 256"/>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post,index) => <PostCard post={post.node} key={post.title} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props : { posts }
  }
}