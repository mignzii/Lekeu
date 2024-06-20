/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from './ui/button'
import Image from "next/image";

function Hero() {
  return (
    <div className='h-full  w-full    mt-16   '>
     <div className='mx-auto container w-full px-5 mb-6'>
     <div className='flex items-center justify-center flex-col space-y-8'>
      <p className='text-5xl text-center flex justify-center w-[500px] font-bold'>Boostez Votre Business Avec Leek</p>
      <p className='   leading-8 tracking-wide w-2/3 text-center text-xl font-medium'>Solution tout-en-un pour la gestion efficace des restaurants, offrant une plateforme intuitive qui simplifie les opérations quotidiennes et améliore l'expérience client</p>
      <Button size={'lg'}  className='bg-[#F16056] font-semibold'>Commencer maintenant</Button>
      </div>
      
     </div>
     <div className='bg-white px-24  py-14'>
     <div className=' container  relative justify-center flex  h-[600px] '>
      <Image src="/hero.PNG" className='rounded-xl'   fill  alt="Picture of the author" />
      </div>
    </div>
     </div>
   
  ) 
}

export default Hero