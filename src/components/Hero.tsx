import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
 <header className='bg-hero lg:py-12 py-6 bg-no-repeat bg-cover bg-center px-9 flex-col lg:flex-row flex sm:px-20   justify-center items-center gap-4 ' >
    <div className="flex flex-1 flex-col gap-5 lg:gap-10">
        <Image src='/logo.svg' height={90} width={101} alt='Logo' className='object-contain' />
        <h1 className="text-4xl leading-[120%] text-white sm:text-6xl font-bold max-w-lg">
        Explore The <span className="red-gradient">Diverse Realms</span>  of Anime Magic
        </h1>
    </div>
  <div className="lg:flex-1 lg:h-[50vh] h-[40vh] relative w-full justify-center ">
  <Image src='/anime.png' objectFit='contain' fill alt='anime' className='object-contain' />
  </div>

 </header>
  )
}

export default Hero