
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const Store = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-moroccan-beige/50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-scheherazade font-bold text-center">المتجر</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              اكتشف تشكيلتنا الواسعة من العبايات والألبسة المغربية التقليدية ذات الجودة العالية والتصاميم الفريدة
            </p>
          </div>
        </div>
        
        <ProductGrid title="جميع المنتجات" showAll={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Store;
