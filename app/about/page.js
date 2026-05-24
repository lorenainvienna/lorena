import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About | Lorena\'s Blog',
  description: 'Learn more about Lorena',
}

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <h1 className={styles.title}>About this blog</h1>
          
          <section className={styles.section}>
            <p className={styles.bio}>
              This is my very personal blog. Why? Because every human has the right to express themselves and every voice deserves to be heard. More-so if it comes from a minority or marginalized group. Hi, I'm Lorena, a mid-thirties trans woman living in Vienna, Austria. I'm many things, a woman, a double citizen, a daughter, a sister, a best friend, a partner, a lover, a lead, a colleague, a stranger; but above and overall I'm myself.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Between Skins</h2>
            <p>
              Beyond this blog, I run <strong>Between Skins</strong>, a mindful bodywork and conscious touch studio based in Vienna's Neubau district. It's a space dedicated to authentic connection and somatic awareness. You can learn more at <a href="https://between-skins.eu" target="_blank" rel="noopener noreferrer">between-skins.eu</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>What you'll find here</h2>
            <p>
              On this blog, I share reflections, moments, and thoughts. Some entries will be deeply personal. Others might touch on identity, belonging, bodywork, relationships, or simply the beauty of everyday moments. Everything here is authentic and unfiltered.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
