'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

import {links, type ILink} from '../lib/links';
import HeaderBtn from "./components/header/headerBtn";
import { usePathname } from "next/navigation";

import useTheme from '../storage/theme';
import ThemeButton from "./components/header/themeBtn";

import useUser from '../storage/user'

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const name = useUser((state) => state.name)
    const lastName = useUser((state) => state.lastName)
    const setName = useUser((state) => state.setName)
    const setLastname = useUser((state) => state.setLastname)

    const pathname = usePathname()

    const mode = useTheme((state) => state.mode)
    const toggleTheme = useTheme((state) => state.toggleTheme)

    useEffect(() => {
        const sessionName = sessionStorage.getItem("sessionName") || "Alex";
        const sessionLastname = sessionStorage.getItem("sessionLastname") || "Abramov";

        const timer = setTimeout(() => {
            setName(sessionName);
            setLastname(sessionLastname);
        }, 0)

        setTimeout(() => {setIsOpen(false)}, 0)

        return clearTimeout(timer);
    }, [pathname, setName, setLastname])

    return (
        <header className="relative-20">
            <nav className="bg-green-1 dark:bg-green-900 py-5 px-10 fixed w-full flex flex-row items-center justify-between">
                <section>
                    <Link 
                        href={'/'}
                        className="text-white-1 text-[24px] font-bold"
                    >
                        <span className="border border-white px-2 py-1 rounded-full text-[16px]">K</span> Kone forest
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
                    <ThemeButton 
                        state={mode}
                        toggleTheme={toggleTheme}
                    />
                    <Link
                        href={"/account"}
                        className="p-2 rounded-full bg-orange-400 text-white-1"
                    >
                        {name[0]}{lastName[0]}
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