
'use client'
import styles from './ristorante.module.scss'
import "@/style/ristorante.css"
import "@/style/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import Banner from "@/components/Banner";
import React, { useEffect, Suspense  } from 'react';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';

//cargar componentes de manera diferida
const IndexParallax = React.lazy(() => import('@/components/ZoomParallax/indexParallax'));
const IndexParallax2 = React.lazy(() => import('@/components/ZoomParallax/indexParallax2'));
const IndexParallax3 = React.lazy(() => import('@/components/ZoomParallax/indexParallax3'));


export default function Ristorante() {
  
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

      function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <div className="w-full ">
        <div className="flex flex-col relative">
          <div className="flex  relative z-20 ">
            <NavBar />
            <NavBarMobile />
          </div>
          <div className="flex object-contain relative overflow-hidden">
            <Image
              className="w-full relative z-10 absolute inset-0 object-cover"
              src="/images/tavolo.jpeg"
              alt="tavolo"
            width={1920} height={1080}
            />
          </div>
        </div>
      </div>
     
      <Banner />
     
      <main className=' bg-custom-gradient bg-radial-gradient'>
        {/* vista escritorio */}
        <h1 className='text-4xl text-center'>Menu</h1>
        
      <div className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <IndexParallax />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <IndexParallax2 />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <IndexParallax3 />
        </Suspense>
          
      </div>

        {/* vista responsive */}
        
        <div>

          
        </div>
      </main>
      <Footer />
    </div>
  );
}




