"use client";
import React from "react"
import { Disclosure } from "@headlessui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";
import Image from "next/image";


export default function NavBarMobile () {

    return (
        <>
        <Disclosure as='nav' className="z-60">
        <Disclosure.Button className="bg-gray-400 sm:hidden absolute top-4 right-4 flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group w-9 h-9">
        {/* <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"> */}
            <GiHamburgerMenu 
                className="block  h-6 w-6 text-center"
                aria-hidden="true"
            />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-gradient-to-b  from-orange-500 to-gray-400 z-100 bg-opacity-10 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 sm:hidden">
          <div className="flex flex-col rounded justify-start item-center ">
            <div className="flex rounded-b-3xl items-center justify-center bg-gray-500 bg-opacity-80 p-3 h-32 py-6">
                <Image className="rounded-full  w-28" src="https://d30jr9d23oaba2.cloudfront.net/images/logo-pizza.png" alt="hair" width={1920} height={1080} />
            </div>
             <div className="flex rounded-t-3xl flex-col bg-opacity-80 justify-items-center bg-gray-500 " >
             <Link href="/" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">HOME</Link>
                 <Link href="/Ristorante" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">Ristorante</Link>
                 <Link href="/Bar" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">Bar</Link>
                 <Link href="/Pizzeria" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">Pizzeria</Link>
                 {/* <Link href="/Prenotaciones" className="bg-indigo-500 h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded text-center ">Prenotazione</Link> */}

                
             </div>

            

             <div className="flex py-8 pt-16 text-white flex-col items-center justify-center">
                <h2>Horario</h2>
                <p>Lunes a sabado</p>
                <p>8:00 AM  -  20:00 PM</p>
             </div>
          </div>
        </div>     
     </Disclosure>
     </>
    )
}