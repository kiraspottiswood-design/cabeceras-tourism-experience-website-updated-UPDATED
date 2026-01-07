import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Sprout, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Authentic Connection',
    description: 'We facilitate genuine cultural exchanges between travelers and our community members.',
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    description: 'Tourism revenue directly supports local families, youth programs, and women artisans.',
  },
  {
    icon: Sprout,
    title: 'Sustainable Practices',
    description: 'We protect our environment and preserve traditional ways of life for future generations.',
  },
  {
    icon: BookOpen,
    title: 'Education & Growth',
    description: 'Our guide program helps youth develop confidence, leadership, and language skills.',
  },
];

export default function AboutPage() {
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
              About Cabeceras
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              A community committed to authentic, ethical tourism
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-base md:text-lg text-foreground leading-body mb-6">
              Cabeceras is a small Costa Rican town nestled between Monteverde and La
              Fortuna, two of the country's most popular tourist destinations. For
              years, travelers passed through our community without stopping, missing
              the opportunity to experience authentic Tico life.
            </p>
            <p className="text-base md:text-lg text-foreground leading-body mb-6">
              We decided to change that. Instead of building resorts or creating
              artificial attractions, we opened our doors to share our real lives —
              our schools, our farms, our traditions, and our stories.
            </p>
            <p className="text-base md:text-lg text-foreground leading-body">
              Today, Cabeceras offers visitors a chance to see beyond the tourist
              trail and connect with the heart of Costa Rica. Every experience is
              designed to benefit our community while providing travelers with
              meaningful, memorable encounters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-200"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <IconComponent
                      width={40}
                      height={40}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-base text-foreground leading-body">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_3.png"
                alt="Local guide with travelers"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
                The Guide Program
              </h2>
              <p className="text-base md:text-lg text-foreground leading-body mb-6">
                Our free local guide program was created to help youth and women in
                our community develop valuable skills while sharing their knowledge
                with visitors.
              </p>
              <p className="text-base md:text-lg text-foreground leading-body mb-6">
                Guides practice English, build confidence, develop leadership
                abilities, and learn about their own community's history and culture
                in new ways. It's a symbiotic exchange where both travelers and
                locals benefit.
              </p>
              <p className="text-base md:text-lg text-foreground leading-body mb-8">
                The program is completely free for visitors because the real value
                lies in the capacity building and cultural exchange it creates.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-3 text-base font-normal"
              >
                <Link to="/tour">Book a Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
              How Tourism Helps Our Community
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  Youth Education
                </h3>
                <p className="text-base text-foreground leading-body">
                  Funds support school programs, educational materials, and
                  extracurricular activities for local children.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  Women's Empowerment
                </h3>
                <p className="text-base text-foreground leading-body">
                  Craft workshops and cooking classes provide income opportunities
                  for women artisans and home cooks.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  Infrastructure Maintenance
                </h3>
                <p className="text-base text-foreground leading-body">
                  Tourism revenue helps maintain community spaces, trails, and
                  public facilities.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                  Local Business Support
                </h3>
                <p className="text-base text-foreground leading-body">
                  Visitors support family-owned accommodations, cafés, and small
                  businesses throughout the town.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">
            Experience the Difference
          </h2>
          <p className="text-base md:text-lg leading-body max-w-2xl mx-auto mb-8">
            Visit Cabeceras and be part of tourism that truly makes a difference
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200 px-8 py-3 text-base font-normal"
          >
            <Link to="/experiences">Explore Experiences</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
