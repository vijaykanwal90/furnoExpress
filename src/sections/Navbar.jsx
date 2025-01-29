import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // Corrected import from react-router
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const NavItems = () => (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center">
      <li className="text-amber-600 hover:text-amber-800 hover:underline transition-colors duration-200 font-bold text-2xl">
        <Link to="/customize">Customize</Link>
      </li>
      <li className="text-amber-600 hover:text-amber-800 hover:underline transition-colors duration-200 font-bold text-2xl">
        <a href="#about">About Us</a>
      </li>
      <li className="text-amber-600 hover:text-amber-800 hover:underline transition-colors duration-200 font-bold text-2xl">
        <a href="#contact">Contact Us</a>
      </li>
      <li className="text-amber-600 hover:text-amber-800 transition-colors duration-200 font-bold text-xl hover:underline">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-white border shadow-md h-16 p-4 ">
      {/* <X className="text-black"/> */}
      <div className="mx-auto sm:px-4 lg:px-12">
        {/* Flex container for the navbar */}
        <div className="flex  justify-between items-center py-5w-8/12">
          {/* Left side: Home route */}

          <a href="/" className="text-amber-600 hover:text-amber-800 font-bold text-2xl transition-colors duration-200 inline-flex items-center space-x-2">
  {/* Logo image */}
  <img src="./assets/logo.svg" alt="logo" width={32} />
  
  {/* FurnoExpress text */}
  <span className="hidden sm:inline">FurnoExpress</span>
  
</a>


          {/* Toggle button for mobile view */}
          <button onClick={toggle} className="sm:hidden mx-4">
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>

          {/* Navbar for larger screens */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Dropdown for mobile view */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className=" mx-4 sm:hidden bg-white">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
