import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Heart, Tent } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StayPage() {
  const { t } = useLanguage();

  const accommodations = [
    {
      id: 'camping-finito',
      nameKey: 'stay.camping.name',
      descriptionKey: 'stay.camping.description',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/camping.jpg',
      icon: Tent,
      amenityKeys: ['stay.camping.amenity1', 'stay.camping.amenity2', 'stay.camping.amenity3'],
      contact: 'https://wa.me/YOUR_CAMPING_FINITO_NUMBER',
    },
    {
      id: 'casa-toucan',
      nameKey: 'stay.casaToucan.name',
      descriptionKey: 'stay.casaToucan.description',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/casa-toucan.jpg',
      icon: Home,
      amenityKeys: ['stay.casaToucan.amenity1', 'stay.casaToucan.amenity2', 'stay.casaToucan.amenity3'],
      contact: 'https://wa.me/YOUR_CASA_TOUCAN_NUMBER',
    },
    {
      id: 'casa-alma',
      nameKey: 'stay.casaAlma.name',
      descriptionKey: 'stay.casaAlma.description',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/screenshot-2025-12-26-at-10-20-19-pm.png',
      icon: Heart,
      amenityKeys: ['stay.casaAlma.amenity1', 'stay.casaAlma.amenity2', 'stay.casaAlma.amenity3'],
      contact: 'https://wa.me/YOUR_CASA_ALMA_NUMBER',
    },
  ];
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/house.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-4">
              {t('stay.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              {t('stay.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {accommodations.map((place, index) => {
              const IconComponent = place.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={place.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"
                      className="w-full aspect-square object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent
                          width={40}
                          height={40}
                          strokeWidth={1.5}
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
                      {t(place.nameKey)}
                    </h2>
                    <p className="text-base md:text-lg text-foreground leading-body mb-6">
                      {t(place.descriptionKey)}
                    </p>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-3">
                        {place.amenityKeys.map((amenityKey) => (
                          <div key={amenityKey} className="bg-muted px-3 py-1 rounded-md">
                            <span className="text-sm text-foreground">{t(amenityKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-3 text-base font-normal"
                    >
                      <a href={place.contact} target="_blank" rel="noopener noreferrer">
                        {t('stay.contactButton')}
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
              {t('stay.testimonials.title')}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
              {t('stay.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_5.png"
                    alt="Jake"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Jake & Emma</p>
                    <p className="text-sm text-muted-foreground">Australia</p>
                  </div>
                </div>
                <p className="text-base text-foreground leading-body italic">
                  "{t('stay.testimonial1')}"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png"
                    alt="Michael"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Michael T.</p>
                    <p className="text-sm text-muted-foreground">USA</p>
                  </div>
                </div>
                <p className="text-base text-foreground leading-body italic">
                  "{t('stay.testimonial2')}"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_4.png"
                    alt="Sophie"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Sophie L.</p>
                    <p className="text-sm text-muted-foreground">France</p>
                  </div>
                </div>
                <p className="text-base text-foreground leading-body italic">
                  "{t('stay.testimonial3')}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
