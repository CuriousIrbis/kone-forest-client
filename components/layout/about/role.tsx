import { IAboutRole } from "@/lib/types/aboutInterface";

const profits: Array<IAboutRole> = [
    {
        role: 'Гость',
        description: 'Выбирает даты, создаёт бронирование, следит за статусом и оставляет отзыв после поездки.'
    },
    {
        role: 'Владелец',
        description: 'Публикует шале, фотографии и удобства, задаёт цену и закрывает личные даты.'
    },
    {
        role: 'Команда Kone forest',
        description: 'Проверяет объекты, модерирует каталог и помогает решить вопросы с бронированием.'
    }
]

export default function AboutRole(){
    return (
        <section className="flex flex-col gap-20 py-20 px-10">
            <h1 className="text-amber-600">НАША РОЛЬ</h1>
            <section className="flex flex-row justify-between">
                <h2 className="text-olive-950 text-[80px] max-w-[50%]">
                    Не агрегатор. <br />Знак качества.
                </h2>
                <p className="text-gray-400/80 max-w-[50%] text-[24px]">
                    Kone forest появился как личная карта домов, 
                    куда хотелось возвращаться. Сегодня это 
                    небольшая платформа с тремя понятными ролями: 
                    гости находят и бронируют, владельцы управляют 
                    своими шале и доступностью, команда проверяет качество 
                    и помогает обеим сторонам. <br />
                    Мы не публикуем черновики и архивные объекты, не смешиваем 
                    отзывы с рекламой и разрешаем оставить оценку только после 
                    завершённого бронирования.
                </p>
            </section>
            <section className="flex flex-row justify-between">
                {profits.map((profit: IAboutRole, index: number) => (
                    <div key={index}
                        className="flex flex-col px-10 py-8 border-l border-gray-400/40"
                    >
                        <span className="text-amber-600 text-[16px] pb-10">0{index+1}</span>
                        <h4 className="text-[28px] font-lora text-olive-950 py-5">{profit.role}</h4>
                        <p className="text-gray-400">{profit.description}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}