
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-moroccan-beige">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-moroccan-pattern"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right animate-fade-in">
            <h1 className="font-scheherazade text-3xl md:text-4xl lg:text-5xl font-bold text-moroccan-charcoal mb-4">
              العبايات المغربية التقليدية
            </h1>
            <p className="text-lg md:text-xl mb-8 text-moroccan-charcoal/80">
              تشكيلة فاخرة من العبايات والألبسة المغربية التقليدية بتصاميم عصرية وأنيقة
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button 
                asChild
                className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white rounded-md px-8 py-2 text-lg"
              >
                <Link to="/store">
                  تسوق الآن
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-moroccan-gold text-moroccan-gold hover:bg-moroccan-gold/10 rounded-md px-6 py-2 text-lg"
              >
                <Link to="/about">
                  اكتشف المزيد
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800" 
              alt="العبايات المغربية التقليدية" 
              className="w-full h-full object-cover object-center rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 border-2 border-moroccan-gold/30 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
