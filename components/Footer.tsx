import React from 'react'
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-white dark:bg-zinc-900 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
            <Image src="/laslogo.png"  width={150}  height={150} alt="Picture of the author" />
             
            </div>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-red-500 font-semibold">Accueil</a>
              <a href="#" className="text-zinc-500 dark:text-zinc-400">A propos</a>
              <a href="#" className="text-zinc-500 dark:text-zinc-400">Services</a>
              <a href="#" className="text-zinc-500 dark:text-zinc-400">Démo gratuite</a>
            </nav>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-red-500">
                <img src="https://placehold.co/20x20" alt="Facebook" />
              </a>
              <a href="#" className="text-red-500">
                <img src="https://placehold.co/20x20" alt="Instagram" />
              </a>
              <a href="#" className="text-red-500">
                <img src="https://placehold.co/20x20" alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="text-center text-zinc-500 dark:text-zinc-400 mt-4">
            © Copyright 2023 Leek
          </div>
        </div>
  )
}

export default Footer