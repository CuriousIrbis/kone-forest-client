'use client'

import { useChaletStore } from "@/lib/storage/chalets";
import Input1 from "./input1";
import Input2 from "./input2";
import { useForm } from "react-hook-form";
import { IFormDate } from "@/lib/types/formDateInterface";
import {IOptions} from "@/lib/types/optionsInterface"
import { redirect } from "next/navigation";
import { useShallow } from "zustand/shallow";

function parseToDate(date: string): Date | undefined{
    if(!date || date.includes('_')) return undefined;
    
    const [day, month, year] = date.split('.')
    const parsed = new Date(Number(year), Number(month) - 1, Number(day))
    
    return isNaN(parsed.getDate()) ? undefined : parsed
}

export default function HomeForm(){

    const {chalets, setChaletCheckIn, setChaletCheckOut} = useChaletStore(
        useShallow((state) => ({
            chalets: state.chalets || [],
            setChaletCheckIn: state.setChaletCheckIn,
            setChaletCheckOut: state.setChaletCheckOut
        }))
    )
    const {handleSubmit, control, watch} = useForm<IFormDate>({
        defaultValues: {
            checkIn: '',
            checkOut: ''
        }
    })

    const checkInStr = watch('checkIn')
    const checkOutStr = watch('checkOut')

    const checkIn = parseToDate(checkInStr)
    const checkOut = parseToDate(checkOutStr)


    const locations = Array.from(new Set(chalets.map(position => position.address)))
    const guestsMax = Array.from(new Set(chalets.map(position => position.guestsMax)))

    function onSubmit(date: IFormDate){
        setChaletCheckIn(date.checkIn)
        setChaletCheckOut(date.checkOut)
        redirect('/chalets')
    }

    const loc = <Input1 params={locations}/>
    const guests = <Input1 params={guestsMax} />
    const income = <Input2 name="checkIn" control={control} maxDate={checkOut}/>
    const leave = <Input2 name="checkOut" control={control} minDate={checkIn}/>

    const fields: Array<IOptions> = [
        {
            title: "КУДА",
            input: loc,
        },
        {
            title: 'ЗАЕЗД',
            input: income
        },
        {
            title: 'ВЫЕЗД',
            input: leave
        },
        {
            title: 'ГОСТИ',
            input: guests
        }
    ]

    return (
        <form className="flex md:flex-row flex-col text-center text-black bg-white-1 justify-between w-full" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field: IOptions, index: number) => (
                <section key={index} className="flex flex-col flex-1 text-center px-10 md:py-5 items-start border-[0.5px] border-gray-500">
                    <label className="text-gray-600 mb-2">{field.title}</label>
                    {field.input}
                </section>
            ))}
            <button type="submit" className="text-white-1 cursor-pointer bg-orange-1 px-10">ПОДТВЕРДИТЬ</button>
        </form>
    )
}