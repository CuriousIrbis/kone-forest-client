import Link from "next/link";
import {type ITable} from '@/lib/types/footerLinksInterface'

const Table: Array<ITable> = [
    {
        header: "Гостям",
        description1: {
            title: "Найти дом",
            href: "/chalets"
        },
        description2: {
            title: 'Мои бронирования',
            href: '/profile'
        }
    },
    {
        header: 'Владельцам',
        description1:{
            title: 'Добавить шале',
            href: '/contacts'
        },
        description2: {
            title: 'Как мы работаем',
            href: '/about'
        }
    },
    {
        header: 'Связаться',
        description1: {
            title: 'Почта',
            href: 'mailto:retrograde1779@gmail.com'
        },
        description2: {
            title: 'Телефон',
            href: 'tel:+79168653400'
        }
    }
]

export default function FLinks(){
    return (
        <div className="flex md:flex-row flex-col justify-between flex-wrap">
            <section className="flex flex-col gap-5">
                <p className="text-white-1 text-[24px] font-bold"><span className="border border-white-1 px-2 py-1 rounded-full text-[16px]">K</span> Kone forest</p>
                <p className="text-gray-300">Природные дома, в которых хочется задержаться.</p>
            </section>
            <section className="flex md:flex-row flex-col gap-50">
                {Table.map((row: ITable, index: number) => (
                    <div className={`flex flex-col text-gray-300 md:gap-2 ${index === Table.length ? 'hidden md:flex' : ''}`} key={index}>
                        <header className="text-yellow-1">
                            {row.header}
                        </header>
                        <Link
                            href={row.description1.href}
                        >
                            {row.description1.title}
                        </Link>
                        <Link
                            href={row.description2.href}
                        >
                            {row.description2.title}
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}