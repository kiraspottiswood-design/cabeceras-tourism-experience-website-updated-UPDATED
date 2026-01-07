import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    id: 1,
    quote: "Cabeceras showed us the real Costa Rica. The cooking class with Doña Luz was unforgettable, and the community tour opened our eyes to authentic Tico life.",
    author: "Sarah & Mike",
    location: "Canada",
    image: "https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png",
  },
  {
    id: 2,
    quote: "We spent three days here and it was the highlight of our trip. The locals are so welcoming, and every experience felt genuine and meaningful.",
    author: "Emma",
    location: "Germany",
    image: "https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png",
  },
  {
    id: 3,
    quote: "The sunset at Finitos Lookout was breathtaking, but what really touched us was the warmth of the community. This is tourism done right.",
    author: "Carlos & Maria",
    location: "Spain",
    image: "https://c.animaapp.com/mk33stinvgyh8p/img/ai_5.png",
  },
  {
    id: 4,
    quote: "Learning embroidery from local artisans was such a special experience. I left with new skills and beautiful memories.",
    author: "Jennifer",
    location: "USA",
    image: "https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png",
  },
];

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cards = carousel.querySelectorAll('.testimonial-card');
      
      gsap.to(cards, {
        x: () => -(carousel.scrollWidth - carousel.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: carousel,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-background animate-on-scroll overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            What Travelers Say
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Hear from visitors who experienced the authentic spirit of Cabeceras.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="testimonial-card flex-shrink-0 w-80 md:w-96 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote width={40} height={40} strokeWidth={1.5} className="text-primary" />
                </div>
                <p className="text-base text-foreground leading-body mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
