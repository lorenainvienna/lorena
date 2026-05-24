import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Made with care and honesty. All thoughts are my own.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Lorena. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
