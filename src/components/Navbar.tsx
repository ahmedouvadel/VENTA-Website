"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi"; // For hamburger and close icons
import logo from "@/img/logoLogin.png"; // Adjust the path as needed.

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-white shadow-md p-2">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-[#F7A400]">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 font-medium text-xl font-['Poppins']">
          <Link href="/" className="text-gray-800 hover:text-orange-500">Home</Link>
          <Link href="#for-client" className="text-gray-800 hover:text-orange-500">Menus</Link>
          <Link href="#services" className="text-gray-800 hover:text-orange-500">Services</Link>
          <Link href="#footer" className="text-gray-800 hover:text-orange-500">Contact</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button className="p-5 rounded-xl text-gray-950 bg-slate-50 hover:text-orange-500 text-xl font-light" variant="outline">
            Sign In
          </Button>
          <Button
            className="p-5 rounded-xl text-xl text-slate-50 font-normal hover:bg-yellow-50 hover:text-gray-800"
            style={{ backgroundColor: "#F7A400" }}
          >
            Register
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden ">
          <button className="text-slate-800" onClick={toggleDrawer} aria-label="Toggle menu">
            {isDrawerOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link href="/" className="block text-gray-800 hover:text-orange-500">Home</Link>
          <Link href="#for-client" className="block text-gray-800 hover:text-orange-500">Menus</Link>
          <Link href="#services" className="block text-gray-800 hover:text-orange-500">Services</Link>
          <Link href="#footer" className="block text-gray-800 hover:text-orange-500">Contact</Link>
          <Button className="w-full p-3 rounded-xl text-gray-950 bg-slate-50 hover:text-orange-500 text-lg font-light" variant="outline">
            Sign In
          </Button>
          <Button
            className="w-full p-3 rounded-xl text-lg text-slate-50 font-normal hover:bg-yellow-50 hover:text-gray-800"
            style={{ backgroundColor: "#F7A400" }}
          >
            Register
          </Button>
        </div>
      )}
    </nav>
  );
}
