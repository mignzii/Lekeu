/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image";
function Service() {
  return (
    <div className='  bg-[#D9D9D9] mx-auto w-full mt-16 container  '>
        
        <div className='flex justify-center items-center'>
        <p className='lg:text-4xl text-xl text-center  w-[550px] font-bold '>Leek offre une large gamme de services </p>
        </div>
        <div className='flex space-x-3 max-w-screen-lg  md:mx-auto  my-8'>
        <div className='pl-3 hidden md:block'>
        <Image src="/trait.svg"   width={13}  height={13} alt="Picture of the author" />
        </div>
            <div className='w-full flex flex-col space-y-4 px-1 md:px-4'>
            
           <div className='flex flex-col space-y-3 md:flex-row md:justify-between '>
                <div className='flex flex-col space-y-4'>
                        <p className='text-base md:text-xl font-semibold  '>Commandes Simplifiées via les Réseaux Sociaux</p>
                        <p className='text-xs md:text-sm tracking-wider text-justify text font-medium  md:w-96'>Leek permet aux restaurants de recueillir les 
                            commandes via differents canaux sur une seule plateforme , 
                            Simplifiant ainsi le processus pour les clients et les restaurants.</p>
                </div>
                <div>
                <Image src="/effi.png" className='rounded-xl w-32 h-32 md:w-[200px] md:h-[200px]' width={200} height={200} alt="Picture of the author" />
                </div>
           </div>
           <div className='flex flex-col space-y-3 md:flex-row md:justify-between'>
                <div className='flex flex-col space-y-4'>
                        <p className='text-base md:text-xl font-semibold  '>Menus Personnalisés et Pages Web Dédiées</p>
                        <p className='text-xs md:text-sm tracking-wider text-justify text font-medium md:w-96'>Les restaurants peuvent personnaliser leurs menus et
                             créer des pages Web dédiées avec Leek, renforçant leur présence en ligne et facilitant la commande pour les clients...</p>
                </div>
                <div>
                <Image src="/vente.png" className='rounded-xl w-32 h-32 md:w-[200px] md:h-[200px]' width={200} height={200} alt="Picture of the author" />
                </div>
           </div>
           <div className='flex flex-col space-y-3 md:flex-row md:justify-between'>
                <div className='flex flex-col space-y-4'>
                        <p className='text-base md:text-xl font-semibold  '>Analyse en Temps Réel et Rapports de Comptabilité</p>
                        <p className='text-xs md:text-sm text-justify text font-medium md:w-96'>Leek offre une analyse avancée des ventes en temps réel et des fonctionnalités de comptabilité pour générer des rapports financiers détaillés, offrant ainsi une visibilité complète sur les finances de l'entreprise.</p>
                </div>
                <div>
                <Image src="/inclu.png" className='rounded-xl w-32 h-32 md:w-[200px] md:h-[200px]' width={200} height={200} alt="Picture of the author" />
                </div>
           </div>
            
           
            </div>
          
        </div>
    </div>
  )
}

export default Service