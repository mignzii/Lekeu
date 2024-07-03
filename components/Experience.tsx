import React from 'react'
import Image from "next/image";

function Experience() {
  return (
    <div className=' px-4 mt-16  bg-white'>
       
        <div className='md:mx-auto mb-16 max-w-screen-lg justify-between  items-center md:flex container'>
        <div className='flex flex-col  space-y-11 py-16'>
        <div className=' '>
        <p className='md:text-xl text-xl w-full  md:w-[550px] font-bold '>Améliorez votre expérience de prise de commande avec Lekk Marketplace</p>
        </div>
            <div className='flex flex-col space-y-2 '>
            <div className='flex items-center  space-x-2'>
                <span className='w-4 h-4 bg-[#F16056] rounded-full'></span>
                <p className='text-xl font-semibold leading-5'>Page de Vente en Ligne Intuitive</p>
            </div>
            <p className='font-normal text-base w-full    md:w-[450px] '>Vos clients commandent facilement sur votre page web.  Vendez 5 fois plus.</p>
        </div>
        <div className='flex flex-col space-y-2 '>
            <div className='flex items-center space-x-2'>
                <span className='w-4 h-4 bg-[#F16056] rounded-full'></span>
                <p className='font-semibold text-xl leading-5'>Plus grande visibilité de votre restaurant</p>
            </div>
            <p className='font-normal text-base md:w-[450px] '>Augmentation de la clientèle grâce à une présence sur une plateforme fréquentée par de nombreux utilisateurs.</p>
        </div>
        <div className='flex flex-col space-y-2 '>
            <div className='flex space-x-2 items-center'>
                <span className='w-4 h-4 bg-[#F16056] rounded-full'></span>
                <p className=' font-semibold text-xl leading-5'>Intégration de Paiement Sécurisé</p>
            </div>
            <p className='font-normal text-base md:w-[450px] '>Offrez des paiements sécurisés. Augmentez la confiance des clients.</p>
        </div>
        </div>
     <div className=' bg-[#F16056] relative w-80 h-80 rounded-md hidden md:block'>
        <div className='  -top-20 -bottom-16 -inset-x-8 absolute   '>
        <Image src="/ordi2.png"   className=' right-0'  fill  alt="Picture of the author" />
        </div>
     </div>
        </div>
    </div>
  )
}

export default Experience