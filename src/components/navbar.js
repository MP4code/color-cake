import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" w-full bg-background shadow-md  hover:bg-flowerPink transition-colors duration-500">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold">Color Cake</div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Liens de navigation pour écran moyen et plus */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="hover:text-background">Accueil</a></li>
                    <li><a href="#reserver" className="hover:text-background">Réservation</a></li>
                    <li><a href="#tarif" className="hover:text-background">Tarifs</a></li>
                    <li><a href="#footer" className="hover:text-background">Contact</a></li>
                </ul>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 transition-all duration-300">
                    <ul className="space-y-3">
                        <li><a href="#" className="block">Accueil</a></li>
                        <li><a href="#reserver" className="block">Réservation</a></li>
                        <li><a href="#tarif" className="block">Tarifs</a></li>
                        <li><a href="#footer" className="block">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

