import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getPost, getAllPosts } from '../../posts'
import styles from '../post.module.css'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = getPost(id)
  return {
    title: post ? post.title : 'Post not found',
    description: post ? post.excerpt : 'This post does not exist',
  }
}

export default async function PostPage({ params }) {
  const { id } = await params
  const post = getPost(id)

  if (!post) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <p>Post not found</p>
            <Link href="/">← Back to home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <Link href="/" className={styles.backLink}>
            ← Back to all posts
          </Link>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>
            {post.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <div className={styles.content}>
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
