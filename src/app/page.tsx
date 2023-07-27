import Image from 'next/image'
import styles from '../styles/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>main</h1>
      <Link href='/dashboard'>go to Dashboard</Link>
      <Link href='/overview'>go to Overview</Link>
    </main>
  )
}
