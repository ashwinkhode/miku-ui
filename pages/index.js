import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miku UI | Component Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className={styles.favicon} src='/favicon.ico' alt='Miku UI' height='120' width='120' />
        <h1 className={styles.title}>
          Welcome to <span style={{color: '#0070f3'}}>
            Miku UI
          </span>
        </h1>

        <p className={styles.description}>
          Miku UI is a tiny (5.59 KB) CSS library that will give your development a jumpstart with ready-made components and styles.
        </p>

        <div className={styles.grid}>
          <a href="/favicon.ico" className={styles.card}>
            <h3>Download &rarr;</h3>
            <p>Download the module and start using instantly</p>
          </a>
          <Link href="/docs/get-started" >
            <a className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Miku UI's features</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer, 'mb-2'}>
        <div>
          © 2021 Miku UI, Inc. All rights reserved.
        </div>
        <div className='text-center'>
          <Link href='https://github.com/ashwinkhode' passHref>
            <a target='_blank'>
              Github
              </a>
          </Link>
           -
          <Link href='https://linkedin.com/in/ashwin-khode' passHref>
            <a target='_blank'>
              Linkedin
              </a>
          </Link>
           -
          <Link href='https://twitter.com/ashwin4real' passHref>
            <a target='_blank'>
              Twitter
              </a>
          </Link>
        </div>
      </footer>
    </div>
  )
}
