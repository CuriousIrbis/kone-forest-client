export default function ContactsInfo(){
    return (
        <section className="max-w-[40%]">
            <h1 className="text-amber-700">ВСЕГДА НА СВЯЗИ</h1>
            <section className="pb-15">
                <h2 className="text-olive-950 text-[80px]">
                    Давайте <br />
                    <i className="text-amber-600/80">поговорим.</i>
                </h2>
                <p className="text-olive-600/90">
                    Поможем с поездкой, бронированием или 
                    добавлением вашего шале в коллекцию.
                </p>    
            </section>
            <hr className="border-gray-300 py-5"/>
            <section className="flex flex-row gap-15">
                <div className="flex flex-col gap-7 text-gray-500/90 text-[12px]">
                    <span>ПОЧТА</span>
                    <span>ТЕЛЕФОН</span>
                    <span>ПОДДЕРЖКА</span>
                </div>
                <div className="flex flex-col gap-7">
                    <a href="mailto:hello.kone-forest@mail.ru">hello.kone-forest@mail.ru</a>
                    <a href="tel:+7-495-777-77-77">+7 495 777-77-77</a>
                    <span>Ежедневно, 9:00–21:00 МСК</span>
                </div>
            </section>
        </section>
    )
}