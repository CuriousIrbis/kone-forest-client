'use client'

import {type IContactsProps} from "@/lib/types/contactsInterface"
import { UseFormRegister, FieldErrors} from "react-hook-form";

enum ETopic{
    'booking_question',
    'adding_chalet',
    'rescheduling_canceling',
    'other'
}

interface IForm{
    name: string
    surname: string
    email: string
    topic: ETopic
    message: string
}

export default function ContactsInput(props: IContactsProps){
    const reg: UseFormRegister<IForm> = props.reg
    const errs: FieldErrors<IForm> = props.errors

    return(
        <div className="flex flex-col">
            <label className="text-olive-500 text-[12px] font-bold py-5">{props.title}</label>
            {props.type == 'email' ? (
                <input 
                    type="email" 
                    {...reg('email', {required: true, maxLength: 150})} 
                    placeholder={props.defaultValue}
                    aria-invalid={errs.email ? true : false}
                    className="
                        aria-invalid:text-red-700 
                    "
                />
            ) : props.type == 'topic' ? (
                <select 
                    {...reg('topic', {required: true})}
                >
                    <option value="booking_question" aria-selected>Вопрос о бронировании</option>
                    <option value="adding_chalet">Хочу добавить шале</option>
                    <option value="rescheduling_canceling">Отмена или перенос</option>
                    <option value="other">Другое</option>
                </select>
            ) : props.type == 'message' ? (
                <textarea 
                    {...reg('message', {required: 'message is required'})} 
                    aria-invalid={errs.message ? true : false} 
                    placeholder={props.defaultValue} 
                    className="pb-10 rounded-[10px] aria-invalid:border-red-700 aria-invalid:text-red-700"
                />
            ) : (
                <input 
                    type="text" 
                    {...reg(props.type == 'name' ? 'name' : 'surname', {required: true, maxLength: 100})}
                    aria-invalid={props.type == 'name' ? 
                        (errs.name ? true : false) :
                        (errs.surname ? true : false)
                    }
                    placeholder={props.defaultValue} 
                    className="aria-invalid:text-red-700"
                    />
            )}
            <hr className="border-gray-300"/>
        </div>
    )
}