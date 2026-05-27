import { useEffect } from 'react'
import AgeGate from '../components/sections/AgeGate'
import BarHero from '../components/sections/BarHero'
import DrinkMenu from '../components/sections/DrinkMenu'
import EntertainmentGrid from '../components/sections/EntertainmentGrid'
import FoodPolicy from '../components/sections/FoodPolicy'

export default function Bar() {
  useEffect(() => {
    document.title = 'GolfoMax | Bar & Divertissement — Candiac, QC'
  }, [])

  return (
    <>
      <AgeGate />
      <BarHero />
      <DrinkMenu />
      <EntertainmentGrid />
      <FoodPolicy />
    </>
  )
}
