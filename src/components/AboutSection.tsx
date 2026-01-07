import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const handleLearnMore = () => {
    const experiencesSection = document.getElementById('experiences');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-background animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://c.animaapp.com/mk33stinvgyh8p/img/ai_2.png"
              alt="locals with travelers"
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-6">
              A Town Beyond Tourism
            </h2>
            <p className="text-base md:text-lg text-foreground leading-body mb-6">
              Cabeceras is more than a destination—it's a living community where
              authentic cultural exchanges happen naturally. Here, tourism
              empowers locals, supports youth education, and uplifts women
              artisans.
            </p>
            <p className="text-base md:text-lg text-foreground leading-body mb-8">
              We invite you to walk our streets, share meals with families, learn
              traditional crafts, and discover the real Costa Rica beyond the
              tourist trail. Every visit contributes to our community's growth
              while offering you genuine connections and unforgettable memories.
            </p>
            <Button
              onClick={handleLearnMore}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-3 text-base font-normal"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
