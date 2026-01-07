import { Button } from '@/components/ui/button';
import { MapPin, MessageCircle, Download, Clock, Users, Footprints } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TourPage() {
  const { t } = useLanguage();

  const tourStops = [
    {
      id: 1,
      nameKey: 'tour.stop1.name',
      descriptionKey: 'tour.stop1.description',
    },
    {
      id: 2,
      nameKey: 'tour.stop2.name',
      descriptionKey: 'tour.stop2.description',
    },
    {
      id: 3,
      nameKey: 'tour.stop3.name',
      descriptionKey: 'tour.stop3.description',
    },
    {
      id: 4,
      nameKey: 'tour.stop4.name',
      descriptionKey: 'tour.stop4.description',
    },
    {
      id: 5,
      nameKey: 'tour.stop5.name',
      descriptionKey: 'tour.stop5.description',
    },
    {
      id: 6,
      nameKey: 'tour.stop6.name',
      descriptionKey: 'tour.stop6.description',
    },
    {
      id: 7,
      nameKey: 'tour.stop7.name',
      descriptionKey: 'tour.stop7.description',
    },
  ];
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-4">
              {t('tour.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              {t('tour.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
              {t('tour.about.title')}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-body mb-6">
              {t('tour.about.description1')}
            </p>
            <p className="text-base md:text-lg text-foreground leading-body mb-6">
              {t('tour.about.description2')}
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{t('tour.stats.duration')}</p>
                <p className="text-lg font-semibold text-foreground">{t('tour.stats.durationValue')}</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <Footprints className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{t('tour.stats.difficulty')}</p>
                <p className="text-lg font-semibold text-foreground">{t('tour.stats.difficultyValue')}</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{t('tour.stats.cost')}</p>
                <p className="text-lg font-semibold text-foreground">{t('tour.stats.costValue')}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div>
              <h3 className="text-2xl font-headline font-semibold text-foreground mb-6">
                {t('tour.route.title')}
              </h3>
              <p className="text-base text-foreground leading-body mb-6">
                {t('tour.route.description')}
              </p>
              <div className="space-y-6">
                {tourStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-headline font-semibold text-lg">
                        {stop.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-semibold text-foreground mb-2 flex items-center gap-2">
                        <MapPin width={20} height={20} strokeWidth={1.5} className="text-primary" />
                        {t(stop.nameKey)}
                      </h4>
                      <p className="text-base text-foreground leading-body">
                        {t(stop.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 border border-border rounded-lg">
                <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                  {t('tour.accessibility.title')}
                </h4>
                <p className="text-base text-foreground leading-body">
                  {t('tour.accessibility.description')}
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card border border-border rounded-lg p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                  {t('tour.map.title')}
                </h3>
                <div className="mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d-84.8!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzAwLjAiTiA4NMKwNDgnMDAuMCJX!5e0!3m2!1sen!2scr!4v1234567890&key=YOUR_API_KEY"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cabeceras Tour Map"
                    className="rounded-md"
                  />
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-normal"
                  >
                    <Download width={20} height={20} strokeWidth={1.5} className="mr-2" />
                    {t('tour.map.downloadButton')}
                  </Button>
                </div>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                  {t('tour.guide.title')}
                </h3>
                <p className="text-base text-foreground leading-body mb-4">
                  {t('tour.guide.description1')}
                </p>
                <p className="text-base text-foreground leading-body mb-6">
                  {t('tour.guide.description2')}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-success text-success-foreground hover:bg-success/90 transition-all duration-200 font-normal"
                >
                  <MessageCircle width={20} height={20} strokeWidth={1.5} className="mr-2" />
                  {t('tour.guide.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
