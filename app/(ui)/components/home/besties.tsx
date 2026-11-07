import { IMock } from "@/lib/types/mockInterface";
import { useChaletStore } from "@/storage/chalets";
import Link from "next/link";
import HomeVarian from "./homeVar";

export default function Besties(){
    const chalets = useChaletStore((state) => state.chalets)
    const filtredChalets = [...chalets].sort((var1: IMock, var2: IMock) => var2.raiting - var1.raiting).slice(0, 3)

    return (
        <section className="py-30 px-10 flex flex-col gap-10">
            <p className="text-amber-700 font-bold text-[12px] tracking-[3px] [word-spacing:8px]">ПРОВЕРЕНО РЕДАКЦИЕЙ</p>
            <section className="flex flex-row items-center justify-between">
                <h2 className="text-green-950 text-[42px]">Дома с характером</h2>
                <Link 
                    href={"/chalets"}
                    className="hover:text-orange-1 duration-700 ease-in-out hover:underline hover:scale-110"
                >
                    Смотреть больше
                </Link>
            </section>
            <section className="flex flex-row justify-between">
                {filtredChalets.map((home: IMock) => (
                    <HomeVarian 
                        data={home}
                        key={home.id}
                    />
                ))}
            </section>
        </section>
    )
}