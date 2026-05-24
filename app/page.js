'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { getAllPosts } from './posts'
import styles from './page.module.css'
import disclaimerStyles from './components/disclaimer.module.css'

export default function Home() {
  const posts = getAllPosts()
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('disclaimerSeen')
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('disclaimerSeen', 'true')
    setShowDisclaimer(false)
  }

  return (
    <>
      {showDisclaimer && (
        <div className={disclaimerStyles.backdrop}>
          <div className={disclaimerStyles.modal}>
            <h2 className={disclaimerStyles.title}>Disclaimer</h2>
            <p className={disclaimerStyles.text}>
              This is a personal blog containing intimate and adult content. All views, opinions, 
              and experiences shared here are mine alone and do not represent any employer or 
              organization.
            </p>
            <p className={disclaimerStyles.text}>
              Names and identifying details have been changed.
            </p>
            <p className={disclaimerStyles.text}>
              I retain all rights to the content published here.
            </p>
            <button className={disclaimerStyles.button} onClick={handleAccept}>
              I understand, let me in
            </button>
          </div>
        </div>
      )}

      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.posts}>
            {posts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <Link href={`/post/${post.id}`}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                </Link>
                <p className={styles.postDate}>
                  {post.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <Link href={`/post/${post.id}`} className={styles.readMore}>
                  Read more →
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
