import Image from "next/image";
import plats from "@/img/plats.png"; // Replace with the actual image path

export function ForClient() {
  return (
    <section id="for-client" className="flex flex-col py-12 bg-gray-50">
      <div className="flex items-center justify-center m-5 ">
        <span className="flex flex-row gap-2 text-3xl text-zinc-800 font-['Poppins'] font-bold">
        Solutions<p className="font-light text-orange-500"> Uniques</p>{" "}
        </span>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          {/* Image Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 ">
            <Image
              src={plats}
              alt="For Clients"
              width={500}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center items-center md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-700 font-['Poppins']">
              Pour les Clients
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-600 space-y-4 font-['Poppins']">
              <li>
                <span className="font-bold">Partenariat Direct :</span>
                <p className="text-gray-500 mt-1 ml-5">
                  Venta établit des partenariats transparents avec les
                  restaurants et chefs, garantissant des collaborations
                  équitables et des offres exclusives.
                </p>
              </li>
              <li>
                <span className="font-bold">Stories des plats exclusifs :</span>
                <p className="text-gray-500 mt-1 ml-5">
                  Découvrez l'histoire, la culture et les inspirations derrière
                  chaque plat, pour une expérience culinaire immersive et
                  unique.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Système de recommandation intelligent :
                </span>
                <p className="text-gray-500 mt-1 ml-5">
                  Profitez de suggestions personnalisées grâce à une
                  intelligence artificielle qui s'adapte à vos goûts et
                  habitudes de commande.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  Modèle de revenu multi-couches :
                </span>
                <p className="text-gray-500 mt-1 ml-5">
                  Un modèle économique diversifié, incluant des commissions,
                  abonnements premium et services publicitaires, pour une
                  plateforme durable et avantageuse.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
