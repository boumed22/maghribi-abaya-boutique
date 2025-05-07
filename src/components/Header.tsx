
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-scheherazade text-2xl font-bold text-moroccan-charcoal">متجر العبايات المغربية</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link to="/" className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2">الرئيسية</Link>
            <Link to="/about" className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2">من نحن</Link>
            <Link to="/store" className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2">المتجر</Link>
            <Link to="/contact" className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2">تواصل معنا</Link>
          </nav>

          <div className="flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingBag className="h-6 w-6 text-moroccan-charcoal hover:text-moroccan-gold transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-moroccan-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/about" 
                className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link 
                to="/store" 
                className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                المتجر
              </Link>
              <Link 
                to="/contact" 
                className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <Link 
                to="/cart" 
                className="font-tajawal text-moroccan-charcoal hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                سلة التسوق
                {totalItems > 0 && (
                  <span className="mr-2 bg-moroccan-gold text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
