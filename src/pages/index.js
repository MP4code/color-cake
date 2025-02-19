import Image from "next/image";
import { Lilita_One, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";
import Tarifs from "@/components/Tarif";
import Order from "@/components/Order";

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${lilitaOne.variable} ${playfairDisplay.variable} min-h-screen font-[var(--font-lilita-one)]`}>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-stretch mb-5 lg:w-full">

          <div className="w-full lg:w-1/2 h-auto lg:h-[500px]">
            <Image
              src="/img/banner.jpg"
              alt="cupcake"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center custom-gradientP p-6">
            <h1 className="text-center py-4 pb-2">Chez Color Cake,</h1>
            <p className="text-justify px-4 pb-1 leading-tight tracking-normal">
              Nous croyons que chaque moment mérite d'être célébré avec douceur et créativité.
              C’est pourquoi nous vous proposons des cupcakes uniques, faits avec amour et attention.
            </p>
            <p className="text-justify px-4 pb-4 leading-tight tracking-normal">
              Choisissez parmi une large gamme de saveurs et personnalisez-les selon vos envies !
            </p>
            <a href="#reserver" className="flex justify-center">
              <button className="m-4 font-bold py-2 px-5 rounded-full shadow-md transition duration-300 w-full max-w-xs"
                style={{ color: 'var(--text-color)', background: 'var(--flower-pink)' }}>
                Réserver
              </button>
            </a>
          </div>
        </div>
        <div className="w-full custom-gradientP">
          <FAQ />
          <Tarifs />
          <Order />
        </div>
      </main>
      <Footer />
    </div>
  );
}
