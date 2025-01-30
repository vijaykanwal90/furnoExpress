// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="./assets/logo.svg" alt="logo" width={40} />
          <Link to="/" className='text-2xl font-bold text-amber-600'>FurnoXpress</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6'>
          <Link to='/' className='text-gray-700 hover:text-amber-600 px-3 py-2'>Home</Link>
          <Link to='/offerings' className='text-gray-700 hover:text-amber-600 px-3 py-2'>Offerings</Link>
          <Link to='/partner' className='text-gray-700 hover:text-amber-600 px-3 py-2'>Partner With Us</Link>
          <Link to='/contact' className='text-gray-700 hover:text-amber-600 px-3 py-2'>Contact</Link>
          <Link to='/about' className='text-gray-700 hover:text-amber-600 px-3 py-2'>About</Link>
          <Link to='/faq' className='text-gray-700 hover:text-amber-600 px-3 py-2'>FAQs</Link>
          <Link to='/sign-in' className='ml-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-800 transition-all duration-200'>
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute w-full bg-white shadow-lg py-4 px-6 space-y-3'>
          <Link to='/' className='block py-2 text-gray-700 hover:text-amber-600'>Home</Link>
          <Link to='/offerings' className='block py-2 text-gray-700 hover:text-amber-600'>Offerings</Link>
          <Link to='/partner' className='block py-2 text-gray-700 hover:text-amber-600'>Partner With Us</Link>
          <Link to='/contact' className='block py-2 text-gray-700 hover:text-amber-600'>Contact</Link>
          <Link to='/about' className='block py-2 text-gray-700 hover:text-amber-600'>About</Link>
          <Link to='/faq' className='block py-2 text-gray-700 hover:text-amber-600'>FAQs</Link>
          <Link to='/sign-in' className='block mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg text-center hover:bg-amber-800'>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
