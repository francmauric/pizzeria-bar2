'use client'; 

import styles from './styles.module.scss'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

//importar imagenes 
const cremaCaramel = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/dessert/crema-caramel.jpg'
const millefoglie = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/dessert/millefoglie-con-crema-768x1152.jpg'
const panna = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/dessert/panna-cotta.jpeg'
const monito = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/monito.jpg'
const tiramisu = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/dessert/tiramisu.jpg'
const torta = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/dessert/torta-alla-fruta.jpeg'


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
            src: cremaCaramel,
            scale: scale5
        },
        {
            src: cremaCaramel,
            scale: scale6
        },
        {
            src: millefoglie,
            scale: scale5
        },
        {
            src: panna,
            scale: scale6
        },
        {
            src: tiramisu,
            scale: scale8
        },
        {
            src: torta,
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
                <h2 className="p-2 text-xl">Dessert</h2>
              <ol className='text-sm'>
                    <li>Creme Caramel</li>
                    <li>Tiramisu</li>
                    <li>Panna cotta</li>
                    <li>Millefoglie con Crema, Panna e Fragole</li>
                    <li>Torta alla Frutta</li>
                    <li>Crema Catalana</li>
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