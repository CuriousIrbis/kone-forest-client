import Image from 'next/image'
import Link from 'next/link';

export default function AboutSuggestion(){
    return(
        <section className='flex flex-row justify-between m-10'>
            <section className='bg-green-1 w-full p-30 flex flex-col gap-10'>
                <h1 className="text-blue-100">ДЛЯ ВЛАДЕЛЬЦЕВ</h1>
                <h2 className='text-white-1 text-[40px]'>
                    У вашего дома <br />
                    есть своя история?
                </h2>
                <p className='text-gray-300/70 text-[20px]'>
                    Расскажите её нам. Познакомимся, 
                    проверим детали и поможем оформить 
                    страницу шале.
                </p>
                <Link 
                    href={'/contacts'}
                    className='text-white-1 bg-orange-1 px-5 py-3 text-[20px] w-fit'
                >
                    Предложить дом
                </Link>
            </section>
            <Image 
                src={'/homes/north.jpeg'}
                alt='your-home'
                width={1000}
                height={50}
                className='max-w-[50%] max-h-162.5'
                loading='eager'
            />
        </section>
    )
}