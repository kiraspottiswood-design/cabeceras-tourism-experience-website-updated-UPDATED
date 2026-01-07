import { Button } from '@/components/ui/button';
import { MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tourStops = [
  {
    id: 1,
    name: 'Salón Comunal',
    description: 'Start your journey at our community center, the heart of local gatherings.',
  },
  {
    id: 2,
    name: 'Local School',
    description: 'Visit our school and learn about education initiatives in the community.',
  },
  {
    id: 3,
    name: 'Community Garden',
    description: 'Explore our organic garden where locals grow fresh produce.',
  },
  {
    id: 4,
    name: 'Agricultural Fields',
    description: 'Walk through working fields and learn about sustainable farming practices.',
  },
  {
    id: 5,
    name: 'The Old Tree',
    description: 'Visit our historic tree, a landmark that has witnessed generations.',
  },
  {
    id: 6,
    name: 'Finitos Lookout',
    description: 'Reach the scenic viewpoint for panoramic valley views.',
  },
  {
    id: 7,
    name: 'Coffee Farm',
    description: 'Tour a local coffee farm and learn about Costa Rican coffee culture.',
  },
];

export default function TourRouteSection() {
  const stopsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stopsRef.current) {
      const stops = stopsRef.current.querySelectorAll('.tour-stop');
      stops.forEach((stop, index) => {
        gsap.fromTo(
          stop,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stop,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1,
          }
        );
      });
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <section id="tour" className="py-24 lg:py-32 bg-background animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Self-Guided Community Tour
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto mb-8">
            Follow our walking route through Cabeceras and discover the authentic
            heart of our community. Each stop tells a story.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Alternative accessible route available upon request
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d-84.8!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzAwLjAiTiA4NMKwNDgnMDAuMCJX!5e0!3m2!1sen!2scr!4v1234567890&key=YOUR_API_KEY"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabeceras Location Map"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-success text-success-foreground hover:bg-success/90 transition-all duration-200 font-normal"
              >
                <MessageCircle width={20} height={20} strokeWidth={1.5} className="mr-2" />
                Request a Local Guide
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-normal"
              >
                Download Map
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2" ref={stopsRef}>
            <div className="space-y-6">
              {tourStops.map((stop, index) => (
                <div
                  key={stop.id}
                  className="tour-stop flex gap-4 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-headline font-semibold text-lg">
                      {stop.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin width={20} height={20} strokeWidth={1.5} className="text-primary" />
                      {stop.name}
                    </h3>
                    <p className="text-base text-foreground leading-body">
                      {stop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
