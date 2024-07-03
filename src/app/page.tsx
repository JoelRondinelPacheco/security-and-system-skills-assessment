import Image from 'next/image'
import styles from './page.module.css'
import AboutMe from './components/about-me/about-me'
import Interest from './components/interest/interest'
import ContactForm from './components/contact-form/contact-form'

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <Interest />
      <ContactForm />
    </main>
  )
}
