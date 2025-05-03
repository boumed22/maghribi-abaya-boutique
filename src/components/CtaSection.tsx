
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-moroccan-charcoal text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-scheherazade font-bold mb-6">
          اكتشف تشكيلتنا الجديدة من العبايات المغربية
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          تصاميم حصرية بأيدي حرفيين مهرة. جودة عالية وأسعار مناسبة مع توصيل لجميع أنحاء المغرب.
        </p>
        <Button 
          asChild
          className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white rounded-md px-8 py-6 text-lg"
        >
          <Link to="/store">
            تسوق الآن
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
