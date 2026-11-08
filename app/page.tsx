'use client'

import Intro from '@/components/layout/home/intro';
import Besties from '@/components/layout/home/besties';
import Profits from '@/components/layout/home/profits'

export default function Home(){
  
  return (
    <main>
        <Intro />
        <Besties />
        <Profits />
        <section></section>
    </main>
  )
}