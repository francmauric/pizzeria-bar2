'use client'; 

import styles from './styles.module.scss'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

//import de imagenes
const spaguetti2 = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/spaguetti-a-la-bongola.jpg'
const spaguetti = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/spaguetti-al-salmone.png'
const gnocchi = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/gnocchi-zuchine.jpg'
const ravioli = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/ravioli-al-salmone.jpg'
const monito = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/monito.jpg'
const risotto = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/risotto-ai-frutti.jpg'
const spaguetti3 = 'https://d30jr9d23oaba2.cloudfront.net/images/imagenParallaxPastas/primi/spaguetti-a-la-carbonara.jpg'



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
            src: spaguetti2,
            scale: scale5
        },
        {
            src: spaguetti3,
            scale: scale6
        },
        {
            src: gnocchi,
            scale: scale5
        },
        {
            src: ravioli,
            scale: scale6
        },
        {
            src: risotto,
            scale: scale8
        },
        {
            src: spaguetti,
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
              <h2 className="p-2 text-xl">Primi Piatti</h2>
              <ol className='text-sm'>
                <li>Spaghetti alle volgole</li>
                <li>Spaghetti al Salmone</li>
                <li>Gnocchi Zucchine e Scampi</li>
                <li>Ravioli al Salmone</li>
                <li>Risotto ai Frutti di mare</li>
                <li>Spaghetti alla Carbonara</li>
                
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
                            placeholder="blur"
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