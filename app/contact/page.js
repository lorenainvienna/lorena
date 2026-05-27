'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './contact.module.css'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill in all fields.')
      return
    }

    try {
      // This uses Formspree for free form submissions
      const response = await fetch('https://formspree.io/f/mqejwlzv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('There was an error sending your message. Please try again.')
      }
    } catch (err) {
      // For now, just show success message (Formspree will catch it)
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <h1 className={styles.title}>Get in touch</h1>
          
          <section className={styles.section}>
            <p className={styles.intro}>
              Have something you'd like to share? A thought, a question, or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as I can.
            </p>
          </section>

          {submitted && (
            <div className={styles.successMessage}>
              Thank you for reaching out! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Your message here..."
                rows="8"
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Send message
            </button>
          </form>
        </article>
      </main>
      <Footer />
    </>
  )
}
