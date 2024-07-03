
import Image from "next/image";

export default function About () {

    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2">
              <Image className="w-full md:w-auto p-5 rounded-full"
                     src="images/ardente1.jpg" 
                     alt="pizzhttps://d30jr9d23oaba2.cloudfront.net/ero" 
                     width={1920} 
                     height={1080}
                     placeholder="blur"
                     blurDataURL="/images/ardente1.jpg"
                     />
            </div>
            <div className="md:w-1/2 m-3">
                <h1 className="p-4 text-2xl md:text-3xl lg:text-4xl text-white">Chi Siamo noi</h1>
                <p className="p-4 text-lg md:text-xl lg:text-2xl text-white">Hace décadas, en el corazón de la pintoresca ciudad de Nápoles, nació una pizzería que pronto se convirtió en una leyenda: La Trattoria del Sapore Italiano. Fundada por el apasionado chef italiano, Antonio Rossi, este acogedor rincón comenzó como un modesto puesto callejero, pero rápidamente se ganó el corazón de los amantes de la auténtica pizza italiana.
                <br /><br />
La historia de nuestra pizzería está entrelazada con la rica tradición culinaria de Italia. Cada receta ha sido transmitida de generación en generación, guardando celosamente los secretos que hacen que nuestras pizzas sean únicas en sabor y textura.
                <br /><br />
En La Trattoria, no solo ofrecemos una deliciosa variedad de pizzas tradicionales, sino que también nos enorgullece servir platos de pasta, ensaladas frescas y antipasti excepcionales. Nuestros ingredientes son cuidadosamente seleccionados, desde la mejor mozzarella de bufala hasta el tomate San Marzano más maduro, y se cocinan a la perfección en nuestro horno de leña.</p>
            </div>
            
        </div>
    )
}