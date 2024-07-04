import Image from 'next/image'
import styles from './page.module.css'
import AboutMe from './components/about-me/about-me'
import ContactForm from './components/contact-form/contact-form'
import AllInterests from './components/interest/all-interests'

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <AllInterests />
      <ContactForm />
    </main>
  )
}
