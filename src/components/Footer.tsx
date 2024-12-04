import Link from 'next/link'

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos de VENTA</h3>
            <p className="text-gray-300">VENTA est votre plateforme de livraison de repas préférée, offrant une large sélection de restaurants et une expérience client exceptionnelle.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
              <li><Link href="/menus" className="text-gray-300 hover:text-white">Menus</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <p className="text-gray-300">Email: info@venta.com</p>
            <p className="text-gray-300">Téléphone: +222 43753805</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; 2024 VENTA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

