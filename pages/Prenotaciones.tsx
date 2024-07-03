import "@/style/globals.css";


import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function prenotaciones() {
  return (
    <div>
      <Header />
      <main className="bg-gray-400">
        <h1 className="text-gray-800 text-4xl text-center p-20 ">
          PRENOTACIONES
        </h1>
        <div className="flex flex-wrap">
          <div className="border-2 border-blue-500 w-2/4">
            <form action="" className="flex flex-wrap justify-center">
              <label htmlFor="" className="w-3/4">NOME</label>
              <input type="text" className="w-3/4 bg-orange-400" />
              <label htmlFor="" className="w-3/4">COGNOME</label>
              <input type="text" className="w-3/4 bg-orange-400"/>
            </form>
          </div>
          <div className="w-2/4 border-2 border-blue-800">
            <Image src="" alt=""  
            width={1920} height={1080}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
