import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Community Market Day',
    date: 'Every Saturday',
    time: '8:00 AM - 2:00 PM',
    location: 'Salón Comunal',
    description: 'Browse local crafts, fresh produce, and homemade goods while supporting community vendors.',
  },
  {
    id: 2,
    title: 'Traditional Music Night',
    date: 'First Friday of Month',
    time: '7:00 PM - 10:00 PM',
    location: 'Mikancha Café',
    description: 'Enjoy live traditional Costa Rican music and dance performances by local artists.',
  },
  {
    id: 3,
    title: 'Coffee Harvest Festival',
    date: 'December 15-17',
    time: 'All Day',
    location: 'Various Locations',
    description: 'Celebrate the coffee harvest with tours, tastings, and cultural activities.',
  },
  {
    id: 4,
    title: 'Youth Art Exhibition',
    date: 'March 20-25',
    time: '10:00 AM - 6:00 PM',
    location: 'Community Center',
    description: 'Showcase of artwork created by local youth, supporting education initiatives.',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 lg:py-32 bg-secondary/10 animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Join us for community celebrations, cultural events, and local gatherings
            throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-foreground">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-base text-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar width={20} height={20} strokeWidth={1.5} className="text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock width={20} height={20} strokeWidth={1.5} className="text-primary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin width={20} height={20} strokeWidth={1.5} className="text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-normal"
          >
            Submit Your Event
          </Button>
        </div>
      </div>
    </section>
  );
}
