'use client'

import ContactsInput from "@/components/ui/contacts/input";
import useUser from "@/lib/storage/user";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

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

export default function ContactsForm(){
    const {name, lastName} = useUser()
    const router = useRouter()

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IForm>()
    const onSubmit: SubmitHandler<IForm> = async (data) => {
        const sendRequest = async () => {
            const res = await fetch('http://localhost:7777/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(!res.ok) throw new Error('Ошибка отправки')

            return res
        }
        try{
            await toast.promise(sendRequest(), {
                loading: 'Отправка запроса.',
                success: 'Успех. Возврат на главную.',
                error: (err) => 'Ошибка отправки'
            })

            reset()

            setTimeout(() => router.push('/'), 500)
        } catch (error){
            console.error(error)
        }
    }

    return (
        <section>
            <Toaster />
            <Suspense>
                {(errors.email || errors.name || errors.surname || errors.topic || errors.message) && (
                    <h1 className="text-red-700 text-center text-[32px] font-bold">
                        Пожалуйста, заполните все поля <br />
                        (мы не сможем иначе принять вашу заявку)
                    </h1>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 flex flex-col">
                    <div className="flex flex-row gap-10">
                        <ContactsInput 
                            title="ИМЯ"
                            defaultValue={name}
                            type="name"
                            isSelect={false}
                            reg={register}
                            errors={errors}
                        />
                        <ContactsInput 
                            title="ФАМИЛИЯ"
                            defaultValue={lastName}
                            type="surname"
                            isSelect={false}
                            reg={register}
                            errors={errors}
                        />
                    </div>
                    <ContactsInput
                        title="ПОЧТА"
                        defaultValue="example1@mail.ru"
                        type="email"
                        isSelect={false}
                        reg={register}
                        errors={errors}
                    />
                    <ContactsInput 
                        title="ТЕМА"
                        type="topic"
                        isSelect={true}
                        reg={register}
                        errors={errors}
                    />
                    <ContactsInput 
                        title="СООБЩЕНИЕ"
                        defaultValue="Расскажите чем можем помочь"
                        type="message"
                        isSelect={false}
                        reg={register}
                        errors={errors}
                    />
                    <button className="text-white bg-amber-700/80 py-5 px-15 mt-20 mb-5 w-fit self-center">
                        Отправить сообщение
                    </button>
                    <span className="text-gray-400 text-[12px] px-10">Отправляя форму, вы соглашаетесь с политикой конфиденциальности.</span>
                </form>
            </Suspense>
        </section>
    )
}