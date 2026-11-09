import { workingData } from "@/lib/mockData";
import { IWorkingData } from "@/lib/types/workingDataInterface";

export default function Working(){
    return (
        <section className="px-10 py-30 bg-beige-1 flex flex-col gap-8">
            <h1 className="text-amber-700 font-bold tracking-[2px] [word-spacing:6px] text-[12px]">КАК ЭТО РАБОТАЕТ</h1>
            <p className="text-[60px]">От поиска до ключей</p>
            
            <section className="flex flex-row">
                {workingData.map((value: IWorkingData, index: number) => (
                    <div key={index} className="px-10 py-10 border-t border-r border-olive-400/70 flex flex-col gap-4">
                        <span className="pb-10 text-amber-700">0{index + 1}</span>
                        <span className="text-[24px]">{value.title}</span>
                        <p className="text-[12px] text-gray-500/60">{value.description}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}