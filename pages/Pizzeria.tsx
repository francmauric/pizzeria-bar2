import React from "react";
import "@/style/globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import { useState, useEffect } from "react";
import "@/style/pizzeria.css";
import Banner from "@/components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image"


type PizzaDescriptions = {
  "4-Stagione": string;
  Diavola: string;
  "4-Formaggi": string;
  Affumicata: string;
  Alesandria: string;
  Amalfi: string;
  Americana: string;
  Bufala1: string;
  Caprese: string;
  Capricciosa: string;
  Carciofi: string;
  Fattoria: string;
  Funghi: string;
  Margherita: string;
  Napoli: string;
};

const Pizzeria: React.FC = () => {
  const [selectedPizza, setSelectedPizza] = useState<string | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);


  const handlePizzaSelect = (pizza: string) => {
    setSelectedPizza(pizza);
  };
  console.log(selectedPizza);

  useEffect(() => {
    handlePizzaSelect(Object.keys(pizzaDescriptions)[sliderIndex]);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    afterChange: (current: number) => {
      setSliderIndex(current);
    }
  };


  const pizzaDescriptions = {
    "4-Stagione": "Pomodoro, mozzarella, 1/4 prosciutto cotto, 1/4 funghi champignon trifolati, 1/4 carciofi trifolati, 1/4 olive nere",
    Diavola: "Pomodoro, Mozzarella, Spianata piccante",
    "4-Formaggi": "Pomodoro, Mozzarella, Edamer, Gorgonzola, Grana grattugiato",
    Affumicata: "Pomodoro, Mozzarella, Speck, Scamorza affumicata",
    Alesandria: "Pomodoro, Mozzarella, Salsiccia, Funghi porcini, Brie",
    Amalfi: "Mozzarella di Bufala, Acciughe, Olive nere, Pomodorini, Basilico",
    Americana: "Pomodoro, Mozzarella, Wurstel, Patate al forno*",
    Bufala1: "Pomodoro, Mozzarella di bufala, basilico",
    Caprese: "Pomodorini, Bufala, Origano",
    Capricciosa:
      "Pomodoro, Mozzarella, Prosciutto cotto , Funghi champignon trifolati, Carciofi trifolati",
    Carciofi: "Pomodoro, Mozzarella, Carciofi trifolati",
    Fattoria: "Pomodoro, Mozzarella, Pancetta, Uovo",
    Funghi: "Pomodoro, Mozzarella, Funghi champignon trifolati",
    Margherita: "Pomodoro, Mozzarella",
    Napoli: "Pomodoro, Mozzarella, Acciughe",
  };

  return (
    <div>
      <div className="flex flex-col relative">
        <div className="flex  relative z-20 ">
          <NavBar />
          <NavBarMobile />
        </div>
        <div className="flex object-contain relative overflow-hidden">
          <Image
            className="w-full relative z-10 absolute inset-0 object-cover"
            src="/images/pizzaheader.jpeg"
            alt="tavolo"
            width={1920} height={1080}
            
          />
        </div>
      </div>
      <div className="w-full ">
        <Banner />
      </div>
      <main
        className={`bg-gray-500 w-full flex-row ${
          selectedPizza && `bg-cover bg-center`
        } ${selectedPizza && `bg-${selectedPizza}`}`}
      >
        <div className="flex flex-col sm:flex-row flex-wrap">
          <div className="flex w-full sm:w-2/4 justify-center text-center">
            <h1 className="text-4xl font-bold py-4 text-center w-full sm:w-2/4 text-white">
              Menu
            </h1>
          </div>
          <div className="flex w-full sm:w-2/4  justify-end pr-4 pb-4">
            <div className="w-full sm:w-2/4 bg-gray-200 p-4 rounded-lg sm:bg-opacity-100 bg-opacity-50">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                tipos de pizza
              </h2>
              <div className="sm:hidden">
              <Slider {...settings}>
                {Object.keys(pizzaDescriptions).map((pizza) => (
                  <li
                     key={pizza}
                    className={`cursor-pointer p-2 m-2 rounded border border-gray-400 ${
                      selectedPizza === pizza
                        ? "bg-blue-200 bg-opacity-40 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    } transition-all duration-300`}
                    onClick={() =>
                      handlePizzaSelect(pizza as keyof PizzaDescriptions)
                    }
                  >
                    {pizza}
                    <p className="text-sm text-gray-600">
                      {pizzaDescriptions[pizza as keyof PizzaDescriptions]}
                    </p>
                  </li>
                ))}
              </Slider>
              </div>
              {/* vista para escritorio */}
              <div className="hidden sm:block">
                <ul>
              {Object.keys(pizzaDescriptions).map((pizza) => (
                  <li
                    key={pizza}
                    className={`cursor-pointer p-2 m-2 rounded border border-gray-400 ${
                      selectedPizza === pizza
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    } transition-all duration-300`}
                    onClick={() =>
                      handlePizzaSelect(pizza as keyof PizzaDescriptions)
                    }
                  >
                    {pizza}
                    <p className="text-sm text-gray-600">
                      {pizzaDescriptions[pizza as keyof PizzaDescriptions]}
                    </p>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pizzeria;