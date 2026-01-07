import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/10 animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Have questions or want to plan your visit? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-normal mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-background text-foreground border-border ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-normal mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-background text-foreground border-border ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-normal mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-background text-foreground border-border min-h-32 ${
                    errors.message ? 'border-destructive' : ''
                  }`}
                  placeholder="Tell us about your visit plans..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-normal"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail width={32} height={32} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@cabeceras.cr"
                    className="text-base text-foreground hover:text-primary transition-colors duration-200"
                  >
                    info@cabeceras.cr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone width={32} height={32} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+50612345678"
                    className="text-base text-foreground hover:text-primary transition-colors duration-200"
                  >
                    +506 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin width={32} height={32} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-base text-foreground">
                    Cabeceras, Puntarenas Province
                    <br />
                    Costa Rica
                  </p>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-success text-success-foreground hover:bg-success/90 transition-all duration-200 font-normal"
              >
                <MessageCircle width={20} height={20} strokeWidth={1.5} className="mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d-84.8!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzAwLjAiTiA4NMKwNDgnMDAuMCJX!5e0!3m2!1sen!2scr!4v1234567890&key=YOUR_API_KEY"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabeceras Contact Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
