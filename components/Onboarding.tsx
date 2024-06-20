/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';

function Onboarding() {
  return (
    <div className=" bg-onboarding  bg-contain bg-no-repeat py-4 h-full px-4 ">
        <div className=' mx-auto max-w-screen-lg container space-y-3 mt-8 bg-white rounded-md'>
                <p className=' font-semibold text-center text-2xl tracking-wider pt-8  '>Guide d'Onboarding en 3 Étapes pour les Restaurants</p>
              <div className='flex justify-center py-6 '>
              <p className='text-base leading-8 font-medium text-center w-[750px]'> Découvrez comment faciliter l'intégration de votre restaurant sur la plateforme Leek grâce
              à notre guide d'onboarding en 3 étapes simples et efficaces</p>
              </div>
              <div className=' w-full max-w-screen-md flex mx-auto  h-[100px] relative'>
              <Image src="/steps.png" className='rounded-xl'  fill  alt="Picture of the author" />
              </div>
              <div className='flex justify-between w-full max-w-screen-lg gap-x-4  mx-auto'>
                  <div className='flex flex-col gap-y-2 justify-center items-center'>
                    <p className='font-bold '>Step 1</p>
                    <p className='font-medium'>Créer un Compte</p>
                    <p className='text-sm leading-5'> Commencez par créer un compte en fournissant
                       les informations de base de votre restaurant,
                        telles que le nom, l'adresse et les coordonnées de contact.</p>
                  </div>
                  <div className='flex flex-col gap-y-2 justify-center items-center'>
                    <p className='font-bold '>Step 2</p>
                    <p className='font-medium'> Configuration du profil</p>
                    <p className='text-sm leading-5 text-justify'> Commencez par créer un compte en fournissant
                       les informations de base de votre restaurant,
                        telles que le nom, l'adresse et les coordonnées de contact.</p>
                  </div>
                  <div className='flex flex-col gap-y-2 justify-center items-center'>
                    <p className='font-bold '>Step 3</p>
                    <p className='font-medium'>   Exploration de la Plateforme </p>
                    <p className='text-sm leading-5'> Commencez par créer un compte en fournissant
                       les informations de base de votre restaurant,
                        telles que le nom, l'adresse et les coordonnées de contact.</p>
                  </div>
              </div>
              
              <div className='py-8 flex justify-center items-center'>
              <Button size={'lg'}  className='bg-[#F16056] font-semibold'>Commencer maintenant</Button>
              </div>
        </div>
    </div>
  )
}

export default Onboarding