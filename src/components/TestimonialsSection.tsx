
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "فاطمة الزهراء",
    location: "الرباط",
    comment: "جودة ممتازة للمنتجات وتوصيل سريع. العباية التي اشتريتها تفوق توقعاتي من حيث الجودة والتصميم.",
    rating: 5
  },
  {
    name: "سلمى العلوي",
    location: "الدار البيضاء",
    comment: "تعاملت مع المتجر أكثر من مرة وفي كل مرة أجد نفس الاهتمام والجودة. أنصح الجميع بالتعامل معهم.",
    rating: 5
  },
  {
    name: "نور الهدى",
    location: "مراكش",
    comment: "تصاميم فريدة وخامات عالية الجودة. سعيدة جدًا بتجربة الشراء من هذا المتجر الرائع.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-scheherazade font-bold text-center mb-12">
          <span className="section-title-decoration">آراء عملائنا</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "fill-moroccan-gold text-moroccan-gold" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-moroccan-gold/20 rounded-full flex items-center justify-center ml-3">
                  <span className="text-moroccan-gold font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
