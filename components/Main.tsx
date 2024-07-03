import About from "./About"
import Footer from "./Footer"
import Image from "next/image";

export default function Main () {

    return(
        <div className="overflow-hidden">
            
            
        <div className="bg-orange-800 flex flex-col ">
          <h1 className="text-center text-5xl pt-10 text-zinc-50">The Tower </h1>
          <div className="flex flex-col-reverse md:flex-row w-full md:items-center ">
           <p className=" text-center text-xl md:text-2xl m-5 text-white">Da sempre noi di The Tower diamo il nostro contributo a sostegno dell’ambiente, 
            privilegiando prodotti biologici e a KM0, stando attenti alla provenienza e al
             confezionamento dei prodotti evitando il packaging in plastica e tutto quello 
             che è preconfezionato, scegliendo cibi freschi e di stagione.</p>
             <Image 
                className=" md:w-5/12 rounded-lg m-5" 
                src="https://d30jr9d23oaba2.cloudfront.net/images/pizzeria-main.jpg" 
                alt="pizzeriaMain" 
                width={1920} 
                height={1080} 
                />
          </div>  
             <div className="flex flex-wrap justify-around w-full md:w-80% pb-10 ">
                {[
                  { src: "https://d30jr9d23oaba2.cloudfront.net/images/cocina.png", alt: "cocina", text: "excelente servicio"},
                  { src: "https://d30jr9d23oaba2.cloudfront.net/images/telefono-inteligente.png", alt: "telefono-inteligente", text: "atencion a domicilio"},
                  { src: "https://d30jr9d23oaba2.cloudfront.net/images/restaurante.png", alt: "restaurante", text: "inclusivita"},
                ].map((item, index) => (
                  <div className="m-3 md:m-5" key={index}>
                    <Image
                      className="w-12 md:w-20 m-2 md:m-5 rounded-full bg-white"
                      src={item.src}
                      alt={item.alt}
                      width={1920}
                      height={1080}
                    />
                    <h3 className="text-center text-white">{item.text}</h3>
                  </div>  
                ))}
             </div>
             
              <About />
             
             
              <Footer/>
             
        </div>
        </div>
    )
}