"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import { useScrollEffect } from "@/utils/client/scrollUtils";

const NavBar: React.FC = () => {
  const navbarVisible = useScrollEffect(); // Siempre llama al hook de efecto de scroll

  const links = [
    { href: "/", text: "Home"},
    { href: "/Pizzeria", text: "Pizzeria"},
    { href: "/Ristorante", text: "Ristorante" },
    { href: "/Bar", text: "Bar"}
    //{ href: "/Prenotaciones", text: "Prenotaciones"}
  ]
  
  return (
    <div className={`hidden sm:flex ${navbarVisible ? "opacity-90" : "opacity-0"}`}>

      <div
        className="flex flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300 text-2xl">
        {navbarVisible && (
          <>
            <div className="flex p-2">
              <Image className="w-40 rounded-full" src="https://d30jr9d23oaba2.cloudfront.net/images/logo-pizza.png" alt="logo-pizza" width={1920} height={1080} />
            </div>
            <div className="flex justify-around content-center h-10 w-full">
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover: hover:font-serif text-zinc-50 cursor-pointer">
                    {link.text}    
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default NavBar;