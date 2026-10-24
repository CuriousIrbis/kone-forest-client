'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

import {links, type ILink} from '../lib/links';
import HeaderBtn from "./components/headerBtn";
import { usePathname } from "next/navigation";

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>("Alex");
    const [lastname, setLastname] = useState<string>("Abramov");
    const pathname = usePathname()

    useEffect(() => {
        const sessionName = sessionStorage.getItem("sessionName") || "Alex";
        const sessionLastname = sessionStorage.getItem("sessionLastname") || "Abramov";

        const timer = setTimeout(() => {
            setName(sessionName);
            setLastname(sessionLastname);
        }, 0)

        setTimeout(() => {setIsOpen(false)}, 0)

        return clearTimeout(timer);
    }, [pathname])

    return (
        <header className="relativepb-20">
            <nav className="bg-green-1 p-5 flex flex-row items-center justify-between">
                <section>
                    <Link 
                        href={'/'}
                    >
                        <span className="border border-white px-2 py-1 rounded-full">K</span> Kone forest
                    </Link>
                </section>
                <section className="hidden md:flex">
                    {links.map((link: ILink, index: number) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-gray-300 hover:text-white-1 px-5 py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </section>
                <section className="flex gap-6">
                    <Link
                        href={"/account"}
                        className="p-2 rounded-full bg-orange-400"
                    >
                        {name[0]}{lastname[0]}
                    </Link>
                    <HeaderBtn setIsOpen={setIsOpen} isOpen={isOpen} />
                </section>
            </nav>
            {isOpen && (
                <section className="flex flex-col absolute text-black bg-gray-300 w-full z-2">
                    {links.map((link: ILink, index: number) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="hover:bg-gray-400 px-5 py-5"
                        >
                            {link.name}
                        </Link>
                    ))}
                </section>
            )}
        </header>
    )
}