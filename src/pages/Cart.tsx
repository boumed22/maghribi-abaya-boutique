
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-moroccan-beige/50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-scheherazade font-bold text-center">سلة التسوق</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              مراجعة المنتجات التي اخترتها قبل إتمام عملية الشراء
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-scheherazade font-bold">منتجاتك</h2>
              <span className="bg-moroccan-gold text-white px-3 py-1 rounded-full text-sm">0 منتجات</span>
            </div>
            
            <div className="py-8 text-center">
              <p className="text-gray-500">لا توجد منتجات في سلة التسوق</p>
              <div className="mt-6">
                <a href="/store" className="inline-flex items-center px-4 py-2 bg-moroccan-gold text-white font-medium rounded hover:bg-moroccan-gold/90 transition-colors">
                  العودة للتسوق
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
