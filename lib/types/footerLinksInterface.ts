type TDescription = {
    title: string
    href: string
}

interface ITable{
    header: string
    description1: TDescription
    description2: TDescription
}

export {type ITable}