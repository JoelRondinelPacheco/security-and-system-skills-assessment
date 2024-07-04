import Image from 'next/image'
import AboutMe from './components/about-me/about-me'
import ContactForm from './components/contact-form/contact-form'
import AllInterests from './components/interest/all-interests'

export default function Home() {
  return (
    <main>
      <AboutMe />
      <AllInterests />
      <ContactForm />
    </main>
  )
}
