'use client'

import HomeVarian from "@/components/ui/home/homeVar";
import { useChaletStore } from "@/lib/storage/chalets";
import { IMock } from "@/lib/types/mockInterface";

export default function Chalets(){
    const isAvailable = useChaletStore((state) => state.chalets).filter((chalet: IMock) => chalet.isAvailable)

    return (
        <main className="px-10 py-30">
            <h1>КОЛЛЕКЦИЯ Kone-forest</h1>
            <p>Найдите свой дом</p>

            {isAvailable.map((chalet: IMock, index: number) => (
                <HomeVarian 
                    key={index}
                    data={chalet}
                />
            ))}
        </main>
    )
}