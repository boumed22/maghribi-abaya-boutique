
import React, { FormEvent, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WhatsappIcon } from '@/components/WhatsappIcon';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log({
        name,
        email,
        message
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم يتم إرسال الرسالة، يرجى المحاولة مرة أخرى",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const whatsappUrl = "https://wa.me/212612345678";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-moroccan-beige/50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-scheherazade font-bold text-center">تواصل معنا</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار المنتج المناسب
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-scheherazade font-semibold mb-6">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">رسالتك</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white w-full"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-scheherazade font-semibold mb-6">معلومات الاتصال</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                  <div className="flex items-start">
                    <Phone className="ml-4 mt-1 text-moroccan-gold" />
                    <div>
                      <h3 className="font-semibold mb-1">الهاتف</h3>
                      <p className="text-gray-600">+212 612 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="ml-4 mt-1 text-moroccan-gold" />
                    <div>
                      <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@moroccanabaya.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="ml-4 mt-1 text-moroccan-gold" />
                    <div>
                      <h3 className="font-semibold mb-1">العنوان</h3>
                      <p className="text-gray-600">المحل رقم 123، حي النخيل، فاس، المغرب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="ml-4 mt-1 text-moroccan-gold" />
                    <div>
                      <h3 className="font-semibold mb-1">ساعات العمل</h3>
                      <p className="text-gray-600">من الاثنين إلى السبت: 9 صباحًا - 8 مساءً</p>
                      <p className="text-gray-600">الأحد: 10 صباحًا - 6 مساءً</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      onClick={openWhatsApp} 
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white w-full flex items-center justify-center gap-2"
                    >
                      <WhatsappIcon />
                      تواصل عبر واتساب
                    </Button>
                  </div>
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

export default Contact;
