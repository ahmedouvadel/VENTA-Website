import Image from 'next/image'

export function WhyChooseVenta() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-700 font-['Poppins']">Pourquoi choisir VENTA ?</h2>
          <ul className="list-disc list-inside text-xl text-gray-600 space-y-2 font-['Poppins']">
            <li>Large sélection de restaurants et de cuisines</li>
            <li>Livraison rapide et fiable</li>
            <li>Suivi en temps réel de vos commandes</li>
            <li>Service client exceptionnel</li>
            <li>Offres et promotions régulières</li>
          </ul>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <Image src="/placeholder.svg" alt="Why Choose VENTA" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  )
}

