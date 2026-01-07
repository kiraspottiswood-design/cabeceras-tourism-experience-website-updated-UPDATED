import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import gsap from 'gsap';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/hero_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="hero-content text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-semibold text-primary-foreground mb-6 sm:mb-8 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground leading-relaxed mb-4 sm:mb-6 font-light">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground leading-relaxed">
              {t('home.hero.tagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Where We Are - Simple and Clear */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl sm:text-2xl font-headline font-semibold text-foreground mb-3">
                  {t('home.whereWeAre.title')}
                </h2>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {t('home.whereWeAre.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Walk - Simplified */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image - Reduced height on mobile */}
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://c.animaapp.com/mk33stinvgyh8p/img/walk_1.jpg"
                  alt="Community walk"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
                  {t('home.communityWalk.title')}
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-foreground leading-relaxed mb-6">
                  <p>
                    {t('home.communityWalk.description1')}
                  </p>
                  <p>
                    {t('home.communityWalk.description2')}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-base px-6 py-3 font-normal w-full sm:w-auto"
                  >
                    <Link to="/tour">{t('home.communityWalk.learnButton')}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-base px-6 py-3 font-normal w-full sm:w-auto"
                  >
                    <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t('home.communityWalk.requestButton')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid + More Ways to Connect */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
                {t('home.moreWays.title')}
              </h2>
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                {t('home.moreWays.description')}
              </p>
            </div>

            {/* Photo Grid - Two photos only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-lg h-64 sm:h-72 md:h-80 shadow-md group">
                <img
                  src="https://c.animaapp.com/mk33stinvgyh8p/img/tamale-making.jpeg"
                  alt="Cooking together"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground text-base sm:text-lg font-medium">{t('home.moreWays.photo1')}</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg h-64 sm:h-72 md:h-80 shadow-md group">
                <img
                  src="https://c.animaapp.com/mk33stinvgyh8p/img/traditional-dancing.jpeg"
                  alt="Celebrations"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground text-base sm:text-lg font-medium">{t('home.moreWays.photo2')}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-base px-8 py-3 font-normal w-full sm:w-auto"
              >
                <Link to="/experiences">{t('home.moreWays.button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Simplified */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-foreground mb-3">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-3 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png"
                    alt="Sarah"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/10"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-base sm:text-lg">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Canada</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  "{t('home.testimonial1')}"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-3 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png"
                    alt="Carlos"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/10"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-base sm:text-lg">Carlos & Ana</p>
                    <p className="text-sm text-muted-foreground">Spain</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  "{t('home.testimonial2')}"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-md md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-3 mb-4">
                  <img
                    src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_5.png"
                    alt="Emma"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/10"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-base sm:text-lg">Emma K.</p>
                    <p className="text-sm text-muted-foreground">Germany</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  "{t('home.testimonial3')}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plan Your Visit - Single Clear CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold mb-4">
              {t('home.planVisit.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              {t('home.planVisit.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xl mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200 text-base px-8 py-3 font-normal w-full sm:w-auto"
              >
                <Link to="/stay">{t('home.planVisit.accommodationButton')}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200 text-base px-8 py-3 font-normal w-full sm:w-auto"
              >
                <Link to="/contact">{t('home.planVisit.contactButton')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
