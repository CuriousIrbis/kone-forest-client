'use client'

import { useChaletStore } from "@/lib/storage/chalets";
import { INumbers } from "@/lib/types/profitsInterface";

export default function Profits(){
    const chalets = useChaletStore((state) => state.chalets)

    const count = chalets.length
    const storeRating = useChaletStore((state) => state.getRating())
    const rating = count > 0 ? (storeRating/count) : 0


    const numbers: Array<INumbers> = [
        {
            position: count.toString(),
            description: 'активных домов'
        },
        {
            position: (rating.toFixed(1)).toString(),
            description: 'средний рейтинг'
        },
        {
            position: '24/7',
            description: 'поддержка гостя'
        }
    ]

    return (
        <section className="px-10 py-30 bg-green-1 flex flex-row flex-start justify-between">
            <section className="max-w-[50%]">
                <h1 className="text-yellow-1 text-[14px]">НЕ ПРОСТО АРЕНДА</h1>
                <p className="text-[64px] text-white">Каждое место проверяем сами.</p>
            </section>
            <section className="max-w-[40%] flex flex-col gap-25">
                <p className="text-white/70 font-bold">
                    Мы знакомимся с владельцами, проверяем адрес, 
                    фотографии, удобства и правила отмены. В 
                    каталоге остаются только активные дома, готовые 
                    принимать гостей.
                </p>
                <hr className="border-white/40"/>
                <section className="flex flex-row justify-between">
                    {numbers.map((value: INumbers, index: number) => (
                        <section key={index} className="flex flex-col">
                            <span className="text-yellow-1 text-[32px]">{value.position}</span>
                            <span className="text-white/40">{value.description}</span>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}