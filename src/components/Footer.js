
import { Lilita_One } from "next/font/google";

const lilitaOne = Lilita_One({
    variable: "--font-primary",
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <div className={`${lilitaOne.variable} w-full font-primary`}>
            <footer className="flex-col justify-items-center items-center bg-matchaGreen p-6  rounded-t-3xl" id="footer" >

                < div className=" flex-1 flex-col justify-items-center items-center w-full" >
                    <div className="flex flex-col justify-center text-center font-bold lg:flex-row lg:gap-6" >
                        <a href="#reserver">
                            <button className="mb-6 font-bold py-2 px-5 rounded-full shadow-md transition duration-300 w-32" style={{ color: 'var(--text-color)', background: 'var(--background)' }}
                            >
                                Réserver
                            </button>
                        </a>
                        <button className="mb-6 font-bold py-2 px-5 rounded-full shadow-md transition duration-300 w-32" style={{ color: 'var(--text-color)', background: 'var(--background)' }}
                            onClick={() => window.open('https://www.instagram.com', '_blank')}>
                            Instagram
                        </button>


                    </div>

                    <h1 className="text-xl font-bold" >COLOR CAKE</h1>
                    <p className="text-sm p-2">&copy; 2025 Color Cake. Tous droits réservés.</p>
                </div >
            </footer >
        </div>
    );
}
