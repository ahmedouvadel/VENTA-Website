import Image from "next/image";
import livreur from "@/img/livreur.png"; // Adjust the path as per your project structure.
import { Button } from "@/components/ui/button";
import partner from "@/img/partner.png"; // Adjust the path as per your project structure.
import vandeur from "@/img/vandeur.png"; // Adjust the path as per your project structure.


export function RoleSection() {
  const roles = [
    { 
      title: "Devenez notre livreur", 
      description: "Rejoignez notre équipe de livraison et profitez d'horaires flexibles tout en offrant un service exceptionnel à nos clients.", 
      image: livreur 
    },
    { 
      title: "Devenez notre partenaire", 
      description: "Associez-vous à nous pour développer votre activité tout en bénéficiant d'un réseau fiable et d'outils innovants.", 
      image: partner 
    },
    { 
      title: "Devenez notre vendeur", 
      description: "Augmentez vos ventes en rejoignant notre plateforme et en accédant à une clientèle élargie et fidèle.", 
      image: vandeur 
    },
  ];
  

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="flex flex-col justify-center gap-4">
              {/* Replace Image with img for debugging */}
              <Image
                src={role.image}
                alt={role.title}
                className="rounded-lg shadow-md mb-4 h-64 w-80"
              />
              <p className="text-2xl font-bold mb-2 text-gray-900 font-['Poppins']">{role.title}</p>
              <span className=" text-gray-700 text-base font-['Poppins'] font-semibold h-20">{role.description}</span>
              <Button className="p-6 w-40 rounded-xl text-slate-50 text-xl" style={{ backgroundColor: "#F7A400" }}>S'inscrire</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
