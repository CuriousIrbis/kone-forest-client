'use client'

import Image from 'next/image';

export default function Home(){
  return (
    <div>
      <div>
        <section className="relative w-full overflow-hidden">
          <Image 
            src={"/mountainsDesktop.JPG"}
            alt="mountainsDesktop.JPG"
            className="hidden md:block"
            width={2040}
            height={780}
            loading="eager"
          />
          <Image 
            src={"/mountains.JPG"}
            width={760}
            height={780}
            alt="mountains.JPG"
            loading="eager"
            className="md:hidden"
          />
          <section className="text-blue-400 absolute ">
            <h1>Коллекция природных домов</h1>
            <h2>Место, где становится <i>тише</i></h2>
            <p>Проверенные шале в лесах, горах и у воды. Прямое бронирование у владельцев и поддержка на всём пути.</p>
          </section>
        </section>
      </div>
    </div>
  )
}