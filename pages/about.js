import Head from 'next/head'
import Link from 'next/link'
import react from 'react'
import styles from '../styles/Home.module.css'


export default function AboutPage() {
    const name = '홍길동'

  return (
    <div className={styles.container}>
        <Head>
            <title>About</title>
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hello world!
        </h1>
      </main>
    </div>
  )
}