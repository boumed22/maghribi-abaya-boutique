
import React from 'react';
import ProductCard, { Product } from './ProductCard';

// Sample product data
export const products: Product[] = [
  {
    id: 1,
    name: "عباية مغربية مطرزة",
    description: "عباية تقليدية مغربية بتطريز يدوي فاخر",
    price: 1200,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=600"
  },
  {
    id: 2,
    name: "جلابية مغربية عصرية",
    description: "جلابية مغربية بتصميم عصري وأنيق",
    price: 950,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600"
  },
  {
    id: 3,
    name: "قفطان مغربي تقليدي",
    description: "قفطان مغربي بألوان زاهية وتطريز فاخر",
    price: 1500,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=600"
  },
  {
    id: 4,
    name: "عباية مغربية حديثة",
    description: "عباية بخامات عالية الجودة وتصميم أنيق",
    price: 1100,
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=600"
  },
  {
    id: 5,
    name: "سلهام مغربي رجالي",
    description: "سلهام مغربي تقليدي للرجال",
    price: 1800,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600"
  },
  {
    id: 6,
    name: "عباية مغربية فاخرة",
    description: "عباية مغربية مطرزة بالخيط الذهبي",
    price: 2200,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=600"
  }
];

interface ProductGridProps {
  title?: string;
  showAll?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title = "منتجاتنا المميزة", showAll = false }) => {
  const displayProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-scheherazade font-bold text-center mb-12">
          <span className="section-title-decoration">{title}</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
