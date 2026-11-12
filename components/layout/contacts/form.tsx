'use client'

import ContactsInput from "@/components/ui/contacts/input";
import useUser from "@/lib/storage/user";

export default function ContactsForm(){
    const {name, lastName} = useUser()
    return (
        <section className="bg-white p-10 flex flex-col">
            <div className="flex flex-row">
                <ContactsInput 
                    title="ИМЯ"
                    defaultValue={name}
                    type="name"
                    isSelect={false}
                />
                <ContactsInput 
                    title="ФАМИЛИЯ"
                    defaultValue={lastName}
                    type="surname"
                    isSelect={false}
                />
            </div>
            <div>
                <ContactsInput
                    title="ПОЧТА"
                    defaultValue="example1@mail.ru"
                    type="email"
                    isSelect={false}
                />
            </div>
            <div>
                <ContactsInput 
                    title="ТЕМА"
                    type="topic"
                    isSelect={true}
                />
            </div>
            <div>
                <ContactsInput 
                    title="СООБЩЕНИЕ"
                    defaultValue="Расскажите чем можем помочь"
                    type="message"
                    isSelect={false}
                />
            </div>
        </section>
    )
}