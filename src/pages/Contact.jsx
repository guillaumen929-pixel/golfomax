import { useEffect } from 'react'
import ContactHero from '../components/sections/ContactHero'
import ContactSplit from '../components/sections/ContactSplit'
import HoursTable from '../components/sections/HoursTable'
import SocialLinks from '../components/sections/SocialLinks'

export default function Contact() {
  useEffect(() => {
    document.title = 'GolfoMax | Contact — Candiac, QC'
  }, [])

  return (
    <>
      <ContactHero />
      <ContactSplit />
      <HoursTable />
      <SocialLinks />
    </>
  )
}
