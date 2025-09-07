import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStore,
  FaUser
} from 'react-icons/fa';


const Footer = () => (
  <footer className="bg-white text-gray-700 border-t">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      
      {/* About with logo */}
      <div>
        <img src='logo.jpg' alt="NittoSodai Logo" className="h-16 mb-4" />
        <h2 className="text-xl font-bold mb-4 text-gray-800">NittoSodai</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          আপনার প্রতিদিনের বাজারের সব চাহিদার জন্য নির্ভরযোগ্য অনলাইন শপ। ঘরে বসেই অর্ডার দিন, আমরা পৌঁছে দেব দরজায়।
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-primary transition">Home</a></li>
           <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
          <li><a href="/shop" className="hover:text-primary transition">Shop</a></li>
          <li><a href="/gadget" className="hover:text-primary transition">Gadget</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
        <ul className="text-sm space-y-2">
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2 text-primary" /> 
            +880 1712906942
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2 text-primary" /> 
            nittosodai2025@gmail.com
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-primary" /> 
            Shologhar Point, Koloni Road, Sunamganj Sodar
          </li>
          <li className="flex items-center">
            <FaStore className="mr-2 text-primary" /> 
            M/S Sabirin Store
          </li>
          <li className="flex items-center">
            <FaUser className="mr-2 text-primary" /> 
            Proprietor: <strong>Md. Matiur Rahman Sabirin</strong>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com/nittosodai.coms" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com/matiursabirin/profilecard/?igsh=dTd3d21sdnYweWR3" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com/@nittosodai-sabirin?si=uNWc0Od39sPAsWyx" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-600 transition">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t text-center py-4 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} <strong>NittoSodai</strong> — All rights reserved</p>
      <p>
        Developed by{' '}
        <a
          href="https://www.linkedin.com/in/jahid-hasan-600262326/"
          className="hover:text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          Jahid Hasan
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
