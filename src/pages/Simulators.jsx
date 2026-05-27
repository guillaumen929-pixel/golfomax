import { useEffect } from 'react'
import SimHero from '../components/sections/SimHero'
import SimPackages from '../components/sections/SimPackages'
import HowItWorks from '../components/sections/HowItWorks'
import BookingForm from '../components/sections/BookingForm'

export default function Simulators() {
  useEffect(() => {
    document.title = 'GolfoMax | Simulateurs — Candiac, QC'
  }, [])

  return (
    <>
      <SimHero />
      <SimPackages />
      <HowItWorks />
      <BookingForm />
    </>
  )
}
