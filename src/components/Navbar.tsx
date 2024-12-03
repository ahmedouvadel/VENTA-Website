import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/img/logoLogin.png"; // Adjust the path as needed.

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-2">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-[#F7A400]">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-xl hover:text-orange-500 font-['Poppins']">
          <Link href="/" className="text-gray-600 ">Home</Link>
          <Link href="/menus" className="text-gray-600">Menus</Link>
          <Link href="/services" className="text-gray-600">Services</Link>
          <Link href="/contact" className="text-gray-600">Contact</Link>
        </div>
        <div className="flex items-center space-x-2 ">
          <Button className="p-5 rounded-xl text-gray-950 bg-slate-50 text-xl font-light" variant="outline">Sign In</Button>
          <Button className="p-5 rounded-xl text-xl text-slate-50 font-normal" style={{ backgroundColor: "#F7A400" }}>Register</Button>
        </div>
      </div>
    </nav>
  );
}
