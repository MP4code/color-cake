import { useState, useEffect } from "react";
import Image from "next/image";

export default function Order() {
    const today = new Date().toISOString().split("T")[0];
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        quantity: 1,
        flavor: "vanilla",
        topping: "sugar",
        booking: today,
        message: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [confirmation, setConfirmation] = useState(null);
    const [OpenModale, setOpenModale] = useState(null);

    const FoncOpenModale = (formData) => {
        setOpenModale(OpenModale === formData ? null : formData);
    };


    useEffect(() => {
        const savedData = localStorage.getItem("orderForm");
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                setFormData({ ...initialFormData, ...parsedData });
            } catch (error) {
                console.error("Error parsing saved form data:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (formData) {
            localStorage.setItem("orderForm", JSON.stringify(formData));
        }
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuantityChange = (change) => {
        setFormData((prevData) => ({
            ...prevData,
            quantity: Math.max(1, Math.min(20, prevData.quantity + change)),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmation("Merci pour votre commande !");
        FoncOpenModale(formData);
        console.log(formData);
    };

    return (
        <div className=" max-w-lg mx-auto p-6 px-0 flex flex-col items-center justify-center lg:max-w-full lg:px-80 lg:flex-row" id="reserver">
            <div className="w-full h-64 bg-[url('/img/cupcake.jpg')] bg-cover bg-top rounded-lg lg:w-1/2 lg:h-[600px] lg:rounded-full">
            </div>

            <div className="lg:w-1/2 rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center pt-4">Réservation</h2>
                {confirmation && (
                    <div className="mt-4 p-3 rounded-md text-center">
                        {confirmation}
                    </div>
                )}
                {OpenModale && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300">
                            <p className="text-center text-lg font-semibold mb-4">
                                Merci d'avoir visité mon site.
                            </p>
                            <p className="text-center text-lg font-semibold mb-6">Bonne Journée</p>
                            <button
                                type="button"
                                onClick={() => { setOpenModale(false); }}  // Assure-toi que handleClose ferme la modale (ex: setOpenModale(false))
                                className="w-32 mx-auto flex justify-center bg-flowerPink text-white p-2 rounded-md font-bold hover:bg-flowerPink-dark transition"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block font-bold">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2  border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-bold">Numéro de téléphone</label>
                            <input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{10}"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-bold">Saveur</label>
                            <select
                                name="flavor"
                                value={formData.flavor}
                                onChange={handleChange}
                                className="w-full p-2 border  border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                            >
                                <option value="vanilla">Vanille</option>
                                <option value="chocolate">Chocolat</option>
                                <option value="strawberry">Fraise</option>
                                <option value="caramel">Caramel</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-bold">Topping</label>
                            <select
                                name="topping"
                                value={formData.topping}
                                onChange={handleChange}
                                className="w-full p-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                            >
                                <option value="sugar">Sucre glace</option>
                                <option value="chocolate">Chocolat</option>
                                <option value="strawberry">Fraise</option>
                                <option value="pistachio">Pistache</option>
                                <option value="caramel">Caramel</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-bold">Quantité</label>
                            <div className="flex items-center space-x-2">
                                <button
                                    type="button"
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-3 py-1  bg-flowerPink rounded-md"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border border-transparent rounded-md">{formData.quantity}</span>
                                <button
                                    type="button"
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-3 py-1 bg-flowerPink rounded-md"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-bold">Date de réservation</label>
                            <input
                                type="date"
                                name="booking"
                                value={formData.booking}
                                onChange={handleChange}
                                min={today}
                                max="2025-12-31"
                                className="w-full p-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-flowerPink"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 font-bold">Message <p className="text-sm">(optionnel)</p></label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-flowerPink"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-flowerPink p-2 rounded-md font-bold hover:bg-matchaGreen hover:text-white transition"
                    >
                        Commander
                    </button>
                </form>
            </div>
        </div>
    );
}
