'use client'

import HomeForm from "@/components/ui/home/form";
import HomeVarian from "@/components/ui/home/homeVar";
import { useChaletStore } from "@/lib/storage/chalets";
import { IChalet } from "@/lib/types/chaletInterface";

export default function Chalets(){
    const isAvailable = useChaletStore((state) => state.chalets).filter((chalet: IChalet) => chalet.is_active)

    return (
        <main className="px-10 py-30">
            <h1 className="text-amber-700 text-[14px]">КОЛЛЕКЦИЯ KONE-FOREST</h1>
            <h2 className="text-olive-950 text-[60px]">Найдите свой дом</h2>
            <div className="py-20"><HomeForm /></div>
            <div className="flex flex-row flex-wrap justify-between gap-40">
                {isAvailable.map((chalet: IChalet, index: number) => (
                    <HomeVarian 
                        key={index}
                        data={chalet}
                    />
                ))}
            </div>
            
        </main>
    )
}