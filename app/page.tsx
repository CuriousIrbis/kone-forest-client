'use client'

import Intro from '@/(ui)/components/home/intro';
import Besties from './(ui)/components/home/besties';

export default function Home(){
  return (
    <main>
        <Intro />
        <Besties />
        <section></section>
        <section></section>
    </main>
  )
}