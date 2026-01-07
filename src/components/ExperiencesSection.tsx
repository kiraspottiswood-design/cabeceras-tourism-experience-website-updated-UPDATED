import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ChefHat, Scissors, Coffee, Mountain } from 'lucide-react';

const experiences = [
  {
    id: 'community-tour',
    title: 'The Community Tour',
    description: 'Walk through our town with local guides, visit the school, community garden, and historic landmarks. Learn about our daily life and traditions.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png',
    icon: Users,
  },
  {
    id: 'cooking-class',
    title: 'Cooking Class with Doña Luz',
    description: 'Learn to prepare authentic Costa Rican dishes using traditional methods and local ingredients in a family kitchen.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png',
    icon: ChefHat,
  },
  {
    id: 'embroidery',
    title: 'Embroidery Workshop',
    description: 'Join local women artisans to learn traditional embroidery techniques passed down through generations.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png',
    icon: Scissors,
  },
  {
    id: 'mikancha',
    title: 'Chill at Mikancha',
    description: 'Relax at our community café, enjoy locally-grown coffee, and connect with residents in a laid-back atmosphere.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png',
    icon: Coffee,
  },
  {
    id: 'sunset-lookout',
    title: 'Sunset at Finitos Lookout',
    description: 'Hike to our scenic lookout point for breathtaking sunset views over the valley and surrounding mountains.',
    image: 'https://c.animaapp.com/mk33stinvgyh8p/img/ai_5.png',
    icon: Mountain,
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-secondary/10 animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Authentic Experiences
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Immerse yourself in the daily life of Cabeceras through meaningful
            activities that connect you with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => {
            const IconComponent = experience.icon;
            return (
              <Card
                key={experience.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-200 cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={experience.image}
                    alt={experience.title}
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
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground leading-body mb-4">
                    {experience.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-normal"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
