'use client'; 

import styles from './styles.module.scss'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

//importando imagenes
const branzino = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/branzino_alla_griglia.jpeg'
const gamberoni = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/gamberoni-alla-griglia.jpeg'
const carne = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/grigliata-di-carne.jpg'
const orata = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/orata-alla-griglia.jpeg'
const monito = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/monito.jpg'
const panatura = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/Panatura-Cotoletta-Milanese-L.jpg'
const scalloppina = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/secondo/Scaloppine.jpeg'

interface Picture {
    src: string;
    scale: any;

}

export default function IndexParallax() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures: Picture[] = [
        {
            src: monito,
            scale: scale4
        },
        {
            src: branzino,
            scale: scale5
        },
        {
            src: gamberoni,
            scale: scale6
        },
        {
            src: carne,
            scale: scale5
        },
        {
            src: orata,
            scale: scale6
        },
        {
            src: panatura,
            scale: scale8
        },
        {
            src: scalloppina,
            scale: scale9
        }
    ]

    return (
        <div>
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) =>{
                        if (index === 0) {
                            return (
            <motion.div className={styles.el1} key={index} style={ {scale }}>
                <div className={styles.imageContainer1}>
                <h2 className="p-2 text-xl">Secondi</h2>
              <ol className='text-sm'>
                <li>Grigliata mista</li>
                <li>Branzino alla griglia</li>
                <li>Orata alla griglia</li>
                <li>Gamberoni alla griglia</li>
                <li>Milanese</li>
                <li>Scaloppina a scelta</li>
              </ol>
            </div>

              
              
            </motion.div>

                            );
                        } else {

                        return <motion.div key={index} style={{scale}} className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={src}
                            layout="fill"
                            alt='image'
                            placeholder='blur'
                            blurDataURL={src}
                        />
                </div>
                    </motion.div>
                        }

                    })
                }
            </div>
        </div>
        </div>
    )
}