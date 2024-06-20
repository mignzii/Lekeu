import React from 'react'
import Image from "next/image";

function booking() {
  return (
    <div className='px-4   bg-[#F16056] py-4'>
        <div className='mx-auto  max-w-screen-lg justify-between items-center py-4 flex-col flex container'>
            <div className='flex w-full '>
            <div className="md:w-1/2 h-auto relative">
                <Image src="/fille.png"   fill className='rounded-l-md'   alt="Picture of the author" />
              </div>
              <div className="md:w-1/2 bg-white rounded-r-md py-3">
                <h2 className="text-xl text-center font-bold mb-4 text-[#F16056]">Voir une démo gratuite</h2>
                <form className="space-y-4 flex w-full flex-col px-12 justify-center items-center">
                  <input type="text" placeholder="Prénom et Nom" className="p-2 w-full placeholder:text-[#F16056] border border-zinc-300 bg-[#E7DFDC] rounded-lg" />
                  <input type="text" placeholder="Nom du restaurant" className="w-full p-2 border border-zinc-300 bg-[#E7DFDC] placeholder:text-[#F16056] rounded-lg"/>
                  <input type="email" placeholder="Email" className=" w-full p-2 border border-zinc-300 bg-[#E7DFDC] placeholder:text-[#F16056] rounded-lg" />
                  <textarea placeholder="Message" className=" p-2 border w-full border-zinc-300 rounded-lg bg-[#E7DFDC] placeholder:text-[#F16056]"></textarea>
                  <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-lg">Envoyer</button>
                </form>
              </div>
            </div>
            <div className='w-full flex justify-around pt-4'>
              <div className='flex items-center justify-center space-x-2'>
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </p>
              <p className='text-white '>leek@gmail.com</p>
              </div>
              <div className='flex items-center justify-center space-x-2'>
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                </p>
              <p className='text-white '>+221 77 132 54 67</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default booking