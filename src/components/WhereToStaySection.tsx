import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Heart, Tent } from 'lucide-react';

const accommodations = [
  {
    id: 'casa-toucan',
    name: 'Casa Toucan',
    description: 'Cozy family-run guesthouse with authentic Costa Rican hospitality and home-cooked meals.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_4.png',
    icon: Home,
    link: '#',
  },
  {
    id: 'casa-alma',
    name: 'Casa Alma',
    description: 'Peaceful retreat with garden views, perfect for travelers seeking tranquility and connection.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_4.png',
    icon: Heart,
    link: '#',
  },
  {
    id: 'camping-finito',
    name: 'Camping Finito',
    description: 'Eco-friendly camping experience near the lookout point, ideal for nature lovers.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_5.png',
    icon: Tent,
    link: '#',
  },
];

export default function WhereToStaySection() {
  return (
    <section id="stay" className="py-24 lg:py-32 bg-secondary/10 animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Where to Stay
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Experience genuine Costa Rican hospitality in locally-owned
            accommodations that support our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((place) => {
            const IconComponent = place.icon;
            return (
              <Card
                key={place.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-200 group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <IconComponent
                        width={32}
                        height={32}
                        strokeWidth={1.5}
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-headline text-foreground">
                    {place.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground leading-body mb-4">
                    {place.description}
                  </CardDescription>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-normal"
                    onClick={() => window.open(place.link, '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-foreground leading-body">
            All accommodations follow sustainable practices and contribute to
            community development.
          </p>
        </div>
      </div>
    </section>
  );
}
