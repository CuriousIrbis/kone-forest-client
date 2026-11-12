'use client'

    // id: 2131234
    // img: "/mountains.JPG",
    // raiting: 4.9,
    // location: 'Алтай',
    // title: 'Кедровый приют',
    // guestsMax: 4,
    // bedrooms: 2,
    // bathrooms: 2,
    // price: 12400

import {type IChalet} from '@/lib/types/chaletInterface'
import Image from 'next/image'
import Link from 'next/link';

export default function HomeVarian({data}: {data: IChalet}){
    const {id, rating, address, title, guestsMax, bedrooms, bathrooms, price, image_url} = data

    const finalImgUrl = image_url || '/static/north.jpg';

    return (
        <Link 
            href={`/chalets/${id}`}
            className='
                text-white 
                hover:cursor-pointer 
                transition-transform 
                duration-700 
                hover:scale-105 
                hover:translate-y-3
                hover:shadow-xl
                rounded-[10px]
                bg-olive-100
                '
        >
            <section className='relative h-80 w-80'>
                <Image 
                    src={`http://localhost:7777${finalImgUrl}`}
                    alt={title}
                    fill
                    className='object-cover rounded-[10px]'
                    priority
                    sizes='80'
                />
                <div className='absolute top-4 right-5'>
                    <span className='text-amber-950 px-3 py-3 text-[12px] bg-gray-100/90 rounded-[10px]'>⭐ {rating}</span>
                </div>
            </section>
            <section className='flex flex-col text-black px-4 py-5 gap-4'>
                <p className='text-amber-800 font-nunito-sans text-[12px] font-bold'>🏕️ {address.toUpperCase()}</p>
                <h3 className='text-green-950 text-[28px]'>{title}</h3>
                <section className='flex flew-row gap-5'>
                    <span>👤 до {guestsMax}</span>
                    <span>🛌 {bedrooms}</span>
                    <span>🛁 {bathrooms}</span>
                </section>
                <hr className='border-gray-300 my-5'/>
                <p>от <span className='text-[22px] font-bold'>{price} ₽</span> / ночь</p>
            </section>
        </Link>
    )
}