
import React, { FormEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Product } from './ProductCard';
import { WhatsappIcon } from './WhatsappIcon';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

interface OrderFormProps {
  product: Product;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ product, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to a service like Formspree
      // Simulating an API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log({
        name,
        phone,
        city,
        product: product.name,
        productId: product.id
      });
      
      setIsSubmitted(true);
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريبًا لتأكيد الطلب",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم يتم إرسال الطلب، يرجى المحاولة مرة أخرى",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = `مرحبا، أرغب في الاستفسار عن ${product.name}`;
    const whatsappUrl = `https://wa.me/212612345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-xl font-scheherazade mb-2">شكرًا لك!</DialogTitle>
          <DialogDescription>
            تم استلام طلبك بنجاح وسنتواصل معك قريبًا لتأكيده
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={openWhatsApp} className="flex items-center justify-center gap-2">
            <WhatsappIcon />
            تواصل عبر واتساب
          </Button>
          <Button variant="outline" onClick={onClose}>
            العودة للمتجر
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-xl font-scheherazade">طلب المنتج</DialogTitle>
        <DialogDescription>
          {product.name} - {product.price} درهم
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input 
            id="phone" 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            placeholder="مثال: +212612345678"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">المدينة / العنوان</Label>
          <Input 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
            placeholder="أدخل المدينة أو العنوان"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="product">المنتج المطلوب</Label>
          <Input 
            id="product" 
            value={product.name} 
            readOnly 
            className="bg-gray-50"
          />
        </div>
        
        <div className="flex justify-end gap-3 pt-3">
          <Button type="button" variant="outline" onClick={onClose}>
            إلغاء
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-white"
          >
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
