
import React from 'react';
import { Truck, CheckCircle2, RefreshCcw, Shield } from 'lucide-react';

const features = [
  {
    icon: <Truck size={28} className="text-moroccan-gold" />,
    title: "توصيل لجميع أنحاء المغرب",
    description: "خدمة توصيل سريعة وآمنة إلى جميع المدن المغربية"
  },
  {
    icon: <CheckCircle2 size={28} className="text-moroccan-gold" />,
    title: "جودة عالية",
    description: "منتجات مصنوعة من أجود الخامات وبأيدي حرفيين مهرة"
  },
  {
    icon: <RefreshCcw size={28} className="text-moroccan-gold" />,
    title: "ضمان الاستبدال",
    description: "إمكانية استبدال المنتج خلال 14 يومًا من الاستلام"
  },
  {
    icon: <Shield size={28} className="text-moroccan-gold" />,
    title: "دفع آمن",
    description: "طرق دفع متعددة وآمنة تناسب احتياجاتك"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-moroccan-beige/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-scheherazade font-bold text-center mb-12">
          <span className="section-title-decoration">لماذا تختارنا؟</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-scheherazade text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
