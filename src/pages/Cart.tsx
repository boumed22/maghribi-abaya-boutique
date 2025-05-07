
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import OrderForm from '@/components/OrderForm';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOrderClick = (product: any) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleCheckoutAll = () => {
    // Create a merged product for the entire cart
    const mergedProduct = {
      id: -1, // Special ID for cart checkout
      name: `طلب متعدد المنتجات (${totalItems} منتجات)`,
      description: items.map(item => `${item.name} x${item.quantity}`).join('، '),
      price: totalPrice,
      image: items[0]?.image || "" // Use the first product image or empty string
    };
    
    setSelectedProduct(mergedProduct);
    setIsFormOpen(true);
  };

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
              <div className="flex items-center gap-2">
                <span className="bg-moroccan-gold text-white px-3 py-1 rounded-full text-sm">
                  {totalItems} منتجات
                </span>
                {items.length > 0 && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-destructive border-destructive hover:bg-destructive hover:text-white"
                  >
                    <Trash2 size={16} className="ml-1" />
                    إفراغ السلة
                  </Button>
                )}
              </div>
            </div>
            
            {items.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-gray-500">لا توجد منتجات في سلة التسوق</p>
                <div className="mt-6">
                  <Button asChild className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white">
                    <a href="/store">
                      العودة للتسوق
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="divide-y divide-gray-200">
                  {items.map(item => (
                    <div key={item.id} className="py-6 flex flex-wrap md:flex-nowrap items-center">
                      <div className="w-full md:w-24 h-24 overflow-hidden rounded-md">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 md:mr-6 mt-4 md:mt-0">
                        <h3 className="font-scheherazade text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <div className="font-bold text-moroccan-gold mt-2">{item.price} درهم</div>
                      </div>
                      
                      <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus size={16} />
                          </Button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <Button
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive border-destructive hover:bg-destructive hover:text-white"
                          >
                            <Trash2 size={16} className="ml-1" />
                            حذف
                          </Button>
                          
                          <Button 
                            size="sm"
                            onClick={() => handleOrderClick(item)}
                            className="bg-moroccan-olive hover:bg-moroccan-charcoal text-white"
                          >
                            <ShoppingCart size={16} className="ml-1" />
                            اطلب الآن
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="flex justify-between text-lg font-bold mb-6">
                    <span>المجموع:</span>
                    <span>{totalPrice} درهم</span>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleCheckoutAll}
                      className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white text-lg py-6 px-8"
                    >
                      <ShoppingCart size={20} className="ml-2" />
                      إتمام الطلب ({totalItems} منتجات)
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedProduct && (
            <OrderForm 
              product={selectedProduct} 
              onClose={() => {
                setIsFormOpen(false);
                if (selectedProduct.id === -1) {
                  // If this was a complete cart checkout, clear the cart when done
                  clearCart();
                }
              }} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Cart;
