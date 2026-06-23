import logo from "../assets/logo.png";
import { CiHeart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi"
import { useState } from "react";
import { Link } from 'react-router-dom'

const navItems = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Menu", to: "/menu" },
  { id: 3, name: "About Us", to: "/about" },
  { id: 4, name: "Contact", to: "/contact" },
];


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar component */}
      <nav className="flex h-24 items-center justify-between px-4 bg-amber-100">
        {/* Left Side: Logo Container */}
        <div className="flex items-center h-full">
          <img
            className="h-full w-auto object-contain"
            src={logo}
            alt="Simply South logo"
            draggable="false"
          />
          <h3 className="font-bold font-mono text-2xl sarina-regular">Simply <span className="text-green-700">South</span></h3>


          {/* Right Side: Navigation Links / Content */}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        <ul className="hidden md:flex gap-2 akaya-kanadaka-regular cursor-pointer pr-4">
          {navItems.map((item) => (

            <li key={item.id}>
              <Link className="text-2xl border-b-2 border-transparent hover:border-b-2 hover:border-orange-500 flex items-center py-2"
                to={item.to}>
                {item.name}
              </Link>
            </li>

          ))}
          <p className="flex items-center gap-1 italic text-3xl bg-orange-500 rounded-2xl p-2">Order Now <CiHeart /></p>
        </ul>
      </nav>

      {isOpen && (
        <div className="bg-orange-200">
          <ul className="md:hidden flex flex-col gap-2 akaya-kanadaka-regular cursor-pointer">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className="text-2xl border-b-2 border-transparent hover:border-b-2 hover:border-orange-500 flex items-center p-2"
                  to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul></div>
      )}
    </>
  );
}