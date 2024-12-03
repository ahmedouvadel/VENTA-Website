import Image from 'next/image'
import liv from "@/img/liv.png"

export function Hero() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold mb-4 text-zinc-800 font-['Poppins']">Bienvenue à VENTA</h1>
          <p className="text-xl text-gray-600 mb-6 font-['Poppins']">
            Découvrez une nouvelle façon de commander et de livrer vos repas préférés. VENTA vous offre une expérience culinaire unique et pratique.
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src={liv} alt="Venta Welcome" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
        
      </div>
    </section>
  )
}

