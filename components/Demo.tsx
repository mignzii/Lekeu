/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Demo() {
  return (
    <div className='px-4 mt-16  bg-white'>
        <div className='mx-auto mb-16 max-w-screen-lg justify-between items-center flex-col flex container'>
        <h2 className="text-3xl font-bold mb-8 pt-8">Les avis de nos partenaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
                  <p className="mb-4">"Leek a transformé notre gestion de restaurant, une machine efficace!"</p>
                  <p className="font-bold">★★★★★</p>
                </div>
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
                  <p className="mb-4">"Simple, efficace, et économique. Leek est la solution parfaite."</p>
                  <p className="font-bold">★★★★★</p>
                </div>
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
                  <p className="mb-4">"Intégration fluide, support client impeccable."</p>
                  <p className="font-bold">★★★★★</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Demo