
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-moroccan-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-scheherazade mb-4">متجر العبايات المغربية</h3>
            <p className="text-gray-300 mb-4">
              نقدم لكم أجمل العبايات المغربية والألبسة التقليدية بتصاميم عصرية وجودة عالية
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-moroccan-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-moroccan-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-scheherazade mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-moroccan-gold transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-moroccan-gold transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-moroccan-gold transition-colors">المتجر</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-moroccan-gold transition-colors">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-scheherazade mb-4">معلومات الاتصال</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="ml-2 mt-1" />
                <p className="text-gray-300">+212 612 345 678</p>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="ml-2 mt-1" />
                <p className="text-gray-300">info@moroccanabaya.com</p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="ml-2 mt-1" />
                <p className="text-gray-300">فاس، المغرب</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} متجر العبايات المغربية - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
