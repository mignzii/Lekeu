'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#dbdbdb]  py-5 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" w-1/4  font-bold">
        <Image src="/laslogo.png"  width={150}  height={150} alt="Picture of the author" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-1/2 lg:space-x-20 lg:justify-center ${isOpen ? "block" : "hidden"}`}>
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-[#F16056] font-semibold " href="/">
              Accueil
          </Link>
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-[#999999] font-medium  " href="/about">
           
              A propos
           
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-[#999999]  ">
           
              Services
           
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-[#999999]  ">
            
              Demo gratuite
            
          </Link>
        </div>
        <div className='w-1/4 flex justify-end'>
        <Button size={'lg'}  className='bg-[#F16056] font-semibold'>Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
