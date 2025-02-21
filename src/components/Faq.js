import { useState } from "react";
import { GoChevronDown } from "react-icons/go";


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "Comment passer commande ?", answer: "Vous pouvez commander vos cupcakes personnalisés directement sur notre site. Une fois votre commande finalisée, il vous suffit de choisir une date de retrait ou de livraison." },
        { question: "Quels sont les délais ?", answer: "Les commandes doivent être passées au moins 5 jours à l'avance." },
        { question: "Comment conserver mes cupcakes ?", answer: "conservez-les dans un endroit frais et sec, à l’abri de la chaleur. Ils se conservent jusqu’à 48 heures." },
        { question: "Quels moyens de paiement acceptez-vous ?", answer: "Nous acceptons les paiements par carte bancaire ou PayPal" },
    ];

    return (
        <section className="max-w-lg mx-auto mt-4 px-0 lg:max-w-full lg:px-80">


            <h2 className=" text-3xl font-bold text-center p-4">FAQ</h2>
            <ul className="p-2 space-y-2 lg: mb-4 px-6">
                {faqData.map((item, index) => (
                    <li key={index} className="">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="p-4 w-full text-left p-4 font-semibold bg-[var(--flower-pink)] flex items-center justify-between gap-5 rounded-lg"
                        >
                            {item.question}
                            <GoChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                        </button>
                        {openIndex === index && (
                            <div className="p-4 max-w-screen">{item.answer}</div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="w-full h-32 bg-[url('/img/delicious-cupcake-with-icing.jpg')] bg-cover bg-top rounded-lg lg: h-64 ">
            </div>
        </section>
    );
}
