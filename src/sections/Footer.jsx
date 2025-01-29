import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary bg-amber-600 text-black text-xl font-bold">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 ">
            <a href="/" className="text-2xl font-bold">
              <img src="./assets/logo.svg" alt="log" width={32}/>
            </a>
            <p className="mt-2 text-sm">
              FurnoExpress&apos;s mission to revolutionize the furniture industry with innovation and sustainability. Their solutions include AI-powered customization, ready-made and tailored furniture, and services for repurposing old pieces. With a focus on creativity and practicality, FurnoXpress helps customers design personalized, stylish, and functional living spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Business Street</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@yourcompany.com</p>
          </div>
        </div>

        {/* Social Media and Newsletter */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button  size="icon">
              <Facebook className="h-5 w-5" />
            </button>
            <button size="icon">
              <Twitter className="h-5 w-5" />
            </button>
            <button  size="icon">
              <Instagram className="h-5 w-5" />
            </button>
            <button size="icon">
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-primary-foreground text-primary rounded-l-md focus:outline-none"
            />
            <button className="rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} FurnoExpress. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
