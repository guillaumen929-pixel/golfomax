import { useEffect } from 'react'
import EventsHero from '../components/sections/EventsHero'
import EventPackages from '../components/sections/EventPackages'
import EventGallery from '../components/sections/EventGallery'
import EventContactForm from '../components/sections/EventContactForm'

export default function Events() {
  useEffect(() => {
    document.title = 'GolfoMax | Événements — Candiac, QC'
  }, [])

  return (
    <>
      <EventsHero />
      <EventPackages />
      <EventGallery />
      <EventContactForm />
    </>
  )
}
