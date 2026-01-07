import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
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
      newErrors.name = t('contact.form.nameError');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.emailError');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageError');
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Form submitted:', formData);
      alert(t('contact.form.successMessage'));
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
    <div className="pt-16 lg:pt-20">
      <section className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
                {t('contact.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-normal mb-2 block">
                    {t('contact.form.name')}
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
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-normal mb-2 block">
                    {t('contact.form.email')}
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
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-normal mb-2 block">
                    {t('contact.form.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-background text-foreground border-border min-h-32 ${
                      errors.message ? 'border-destructive' : ''
                    }`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-normal"
                >
                  {t('contact.form.submitButton')}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
                {t('contact.other.title')}
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail width={32} height={32} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        {t('contact.email.title')}
                      </h3>
                      <a
                        href="mailto:info@cabeceras.cr"
                        className="text-base text-foreground hover:text-primary transition-colors duration-200"
                      >
                        info@cabeceras.cr
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t('contact.email.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageCircle width={32} height={32} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                        {t('contact.whatsapp.title')}
                      </h3>
                      <p className="text-base text-foreground mb-3">
                        {t('contact.whatsapp.description')}
                      </p>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-success text-success-foreground hover:bg-success/90 transition-all duration-200 font-normal"
                      >
                        <MessageCircle width={20} height={20} strokeWidth={1.5} className="mr-2" />
                        {t('contact.whatsapp.button')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                  {t('contact.askAbout.title')}
                </h3>
                <ul className="space-y-2 text-base text-foreground leading-body">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{t('contact.askAbout.item1')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{t('contact.askAbout.item2')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{t('contact.askAbout.item3')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{t('contact.askAbout.item4')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{t('contact.askAbout.item5')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
