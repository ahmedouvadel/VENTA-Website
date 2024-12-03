import Image from 'next/image'
import why from '@/img/why.png'

export function WhyChooseVenta() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
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
        <div className="flex justify-center items-center md:w-1/2 md:pl-12  ">
          <Image src={why} alt="Why Choose VENTA" width={200} height={200} className="rounded-lg shadow-md"  />
        </div>
      </div>
    </section>
  )
}

