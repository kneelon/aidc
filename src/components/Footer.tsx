import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/logo.png" alt="AIDC Logo" width={40} height={40} className="bg-white rounded-full p-1" />
              <span className="font-bold text-lg">AIDC Electrical</span>
            </div>
            <p className="text-gray-400">
              Providing professional electrical services and high-quality supplies for residential, commercial, subdivisions and electric corporations across the Philippines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span> 09519189052
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> electricalaidc@yahoo.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AIDC Electrical Services and Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
