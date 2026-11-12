import Image from 'next/image'

export default function AboutIntro(){
    return (
        <section className='flex flex-row justify-between'>
            <div className='bg-green-1 w-full px-10 py-20'>
                <h1 className='text-amber-400'>О KONE FOREST</h1>
                <h2 className='text-[80px] text-white-1'>Мы соединяем людей с <i className='text-amber-600'>настоящими местами</i></h2>
            </div>
            <Image 
                src={'/homes/foggy-side.jpeg'}
                alt='home on the river'
                width={1000}
                height={150}
                className='w-[50%]'
                loading='eager'
            />
        </section>
    )
}