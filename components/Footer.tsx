import React from "react";
import ContainerItems from "./ContainerItems";
/* import { Icons } from "./Menu" */
import SocialIcons from "./SocialIcons";


export default function Footer () {

    return(
        <>
            <footer className="bg-gray-900 text-white">
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900">
                  <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-orange-500">Gratis</span> hasta que estés listo para el lanzamiento
                  </h1>
                  <div>
                    <input 
                        type="text" 
                        placeholder="Enter Your ph.no"
                        className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                        />
                    <button className="bg-orange-500 hover:bg-orange-600 duration-300 px-5 py-2.5 font-[Poppins]
                       rounded-md text-white md:w-auto w-full ">
                        Request Code
                    </button>   
                  </div>
                </div>
                <ContainerItems />
                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray400 text-sm pb-8">
                      <span>© 2020 Appy. All rights reserved.</span>
                      <span>Terms - Privacy Policy</span>
                      <SocialIcons  />
                </div>
            </footer>
            
        </>
    )
}