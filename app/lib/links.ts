interface ILink {
    name: string
    href: string
}

const links: Array<ILink> = [
    {
        name: 'Домики',
        href: '/chalets'
    },
    {
        name: 'О проекте',
        href: '/about'
    },
    {
        name: 'Контакты',
        href: '/contacts'
    }
]

export {links, type ILink}