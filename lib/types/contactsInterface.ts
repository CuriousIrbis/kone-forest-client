import { UseFormRegister, FieldErrors } from "react-hook-form";

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

interface IContactsProps{
    title: string
    defaultValue?: string
    type: 'name' | 'surname' | 'email' | 'message' | 'topic'
    isSelect: boolean
    reg: UseFormRegister<IForm>
    errors: FieldErrors<IForm>
}

export {type IContactsProps}