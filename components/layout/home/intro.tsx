'use client';

import Image from 'next/image';
import HomeForm from '@/components/ui/home/form';

export default function Intro(){
    return (
        <section className={`flex flex-col px-10 py-10 bg-linear-to-b from-green-4 via-green-3 to-green-2`}>
            <div className='absolute inset-0 -z-10'>
                <div className='md:hidden blur-[3px] block relative h-full w-full'>
                    <Image 
                        src={'/home.jpg'}
                        alt='home.jpg'
                        className='object-cover'
                        sizes='100vw'
                        fill
                        priority
                    />
                </div>
                <div className='hidden md:block relative h-full w-full'>
                    <Image 
                        src={'/homeDesktop-6.jpg'}
                        alt='home.jpg'
                        className='object-cover'
                        sizes='100vw'
                        priority
                        fill
                        quality={100}
                    />
                </div>
            </div>
            <section className='flex flex-col gap-10'>
                <h1 className='text-yellow-1 text-[14px]'>КОЛЛЕКЦИЯ ПРИРОДНЫХ ДОМОВ</h1>
                <p className='md:text-[80px] text-[32px] py-0 my-0 text-white-1'>Место, где <br />становится <i className='text-orange-1'>тише</i></p>
                <p className='text-[14px] text-gray-300'>
                    Проверенные шале в лесах, горах и у воды. <br />
                    Прямое бронирование у владельцев и поддержка на всём пути
                </p> 
            </section>
            <section className='pt-30 pb-5'>
                <HomeForm />
            </section>
        </section>
    )
}