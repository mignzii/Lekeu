import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';

function Mission() {
  return (
    <div className='bg-[#D9D9D9] mx-auto max-w-screen-lg w-full h-full my-16 container '>
        <div className='flex w-full  justify-between space-x-2 '>
            <div className='flex   flex-col space-y-2'>
                <p className='text-[#FA3D48] text-sm font-bold tracking-wide'>Notre Mission</p>
                <p className='text-4xl font-bold   '>Révolutionner la Gestion des Restaurants</p>
                <p className='text-base leading-7 text-justify w-[350px]'>En nous appuyant sur la technologie, nous visons à offrir 
                aux restaurateurs les outils dont ils ont besoin pour prospérer dans un environnement très concurrentiel.</p>
                <div className='py-8 flex  items-center'>
              <Button size={'lg'}  className='bg-[#FA3D48] font-semibold'>En savoir plus</Button>
              </div>
            </div>
            <div className='  space-x-2 hidden md:flex '>
            <Image src="/bran.png"   className=' top-8 relative' width={100} height={100}    alt="Picture of the author" />
            <Image src="/cuisto.png"   className='top-4 relative' width={100} height={100}   alt="Picture of the author" />
            <Image src="/cusin.png"   className=' ' width={100} height={100}  alt="Picture of the author" />
            </div>
        </div>
    </div>
  )
}

export default Mission