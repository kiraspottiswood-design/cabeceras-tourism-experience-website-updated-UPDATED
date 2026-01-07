import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/ai_1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="hero-content text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-6">
            Discover Authentic Costa Rican Life in Cabeceras
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground mb-8 max-w-2xl mx-auto leading-body">
            A meaningful stop near Monteverde — explore, connect, and learn with
            the local community.
          </p>
          <Button
            size="lg"
            onClick={handleCTAClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-6 text-base font-normal"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
