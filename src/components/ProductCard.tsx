
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import OrderForm from './OrderForm';
import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast } = useToast();

  const handleOrderClick = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
        <div className="moroccan-border">
          <div className="product-image h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4">
            <h3 className="font-scheherazade text-xl font-semibold mb-2 text-moroccan-charcoal">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="font-bold text-moroccan-gold">{product.price} درهم</span>
              
              <Button 
                onClick={handleOrderClick}
                className="bg-moroccan-olive hover:bg-moroccan-charcoal text-white rounded-md flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                اطلب الآن
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <OrderForm product={product} onClose={() => setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
