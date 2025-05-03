
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-moroccan-beige/50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-scheherazade font-bold text-center">من نحن</h1>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-scheherazade font-bold mb-6">قصتنا</h2>
                <p className="mb-4 text-gray-700">
                  انطلق متجر العبايات المغربية من شغف عميق بالتراث المغربي الغني وفن الخياطة التقليدية. بدأت رحلتنا كمشروع صغير في مدينة فاس، لتتحول إلى علامة تجارية معروفة بجودتها العالية وتصاميمها الفريدة.
                </p>
                <p className="mb-4 text-gray-700">
                  نحن نسعى دائمًا للحفاظ على الأصالة المغربية مع إضافة لمسات عصرية تناسب المرأة العربية وتلبي احتياجاتها اليومية، لتجمع بين الأناقة والراحة في آن واحد.
                </p>
                <p className="text-gray-700">
                  فريقنا مكون من حرفيين مهرة يمتلكون خبرة طويلة في مجال الخياطة والتطريز التقليدي، ويعملون بشغف لإنتاج قطع فريدة تحكي قصة التراث المغربي الأصيل.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=800" 
                  alt="تراث مغربي" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 border-2 border-moroccan-gold/30 rounded-lg"></div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-scheherazade font-bold mb-8 text-center">قيمنا</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-scheherazade text-xl font-semibold mb-3 text-moroccan-gold">الجودة</h3>
                  <p className="text-gray-700">
                    نستخدم أجود أنواع الأقمشة والخامات، ونولي اهتمامًا خاصًا بأدق التفاصيل لضمان منتجات عالية الجودة.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-scheherazade text-xl font-semibold mb-3 text-moroccan-gold">الأصالة</h3>
                  <p className="text-gray-700">
                    نحافظ على الطابع الأصيل للملابس المغربية التقليدية مع إضافة لمسات عصرية تناسب العصر الحديث.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-scheherazade text-xl font-semibold mb-3 text-moroccan-gold">الاستدامة</h3>
                  <p className="text-gray-700">
                    نتبنى ممارسات مستدامة في الإنتاج ونحرص على دعم الحرفيين المحليين والحفاظ على التراث.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
