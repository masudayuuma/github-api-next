import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github API Users and Repositories</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Github API 
        </h1>

        <p className={styles.description}>
          You can search through our application in Github by Users or Repositories
        </p>

        <div className={styles.grid}>
          <Link href="/user-search" className={styles.card}>
            <h3>Users &rarr;</h3>
            <p>Looking for a specific user in Github? Check out our free optimized search filter.</p>
          </Link>

          <Link href="/repositories-search" className={styles.card}>
            <h3>Repositories &rarr;</h3>
            <p>Looking for some repositories in Github? Check out our free optimized search filter.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://zebrands.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.png" alt="Zebrands Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
