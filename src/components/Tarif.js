import Image from "next/image";


export default function Tarifs() {
    return (
        <section id="tarif" className="lg:px-80 ">
            <div className=" w-full h-34 relative lg:flex items-center justifify-center p-6">
                <h2 className="text-3xl text-letf font-bold pt-6 pl-6 lg:p-0">Nos Tarifs</h2>


                <Image
                    src="/img/FreshlyCupcake2.png"
                    alt="cupcake"
                    width={120}
                    height={120}
                    className="absolute bottom-0 right-2 mb-6 lg: hidden"
                    style={{ width: "auto", height: "auto" }}
                />


            </div>
            <div className="py-10 text-center relative h-full">
                <Image
                    src="/img/FreshlyCupcake2.png"
                    alt="cupcake"
                    width={120}
                    height={120}
                    className="absolute bottom-0 letf-0 p-4 lg: right-0"
                    style={{ width: "auto", height: "auto" }}

                />
                <div className="flex flex-wrap items-center justify-center  gap-6 " >

                    <div className="w-64 bg-background rounded-lg h-32">
                        <div>
                            <h3 className="text-2xl font-bold m-2 text-flowerPink">Classique</h3>
                            <p className="">Cupcake nature ou chocolat</p>
                            <p className="font-bold text-xl mt-4">3€ / pièce</p>
                        </div>
                    </div>


                    <div className=" w-64 rounded-lg h-32 bg-background">
                        <h3 className="text-2xl font-bold m-2 text-flowerPink">Personnalisé</h3>
                        <p className="">Choix du parfum et décor</p>
                        <p className="font-bold text-xl mt-4">5€ / pièce</p>
                    </div>


                    <div className="w-64  rounded-lg h-32 bg-background">
                        <h3 className="text-2xl font-bold m-2 text-flowerPink">Boîte Gourmande</h3>
                        <p className="">6 cupcakes assortis</p>
                        <p className="font-bold text-xl mt-4">18€ / boîte</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
