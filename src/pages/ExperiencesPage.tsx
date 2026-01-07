import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, ChefHat, Scissors, Mountain, CircleDot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperiencesPage() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 'community-tour',
      titleKey: 'experiences.communityWalk.title',
      descriptionKey: 'experiences.communityWalk.description',
      durationKey: 'experiences.communityWalk.duration',
      difficultyKey: 'experiences.communityWalk.difficulty',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/walk_1.jpg',
      icon: Users,
      link: '/tour',
      guideContact: 'https://wa.me/YOUR_PHONE_NUMBER',
      aboutButtonKey: 'experiences.communityWalk.aboutButton',
      guideButtonKey: 'experiences.communityWalk.guideButton',
    },
    {
      id: 'cooking-class',
      titleKey: 'experiences.cooking.title',
      descriptionKey: 'experiences.cooking.description',
      durationKey: 'experiences.cooking.duration',
      difficultyKey: 'experiences.cooking.difficulty',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/dona-luz.jpg',
      icon: ChefHat,
      contact: 'https://wa.me/YOUR_DONA_LUZ_NUMBER',
      buttonKey: 'experiences.cooking.button',
    },
    {
      id: 'embroidery',
      titleKey: 'experiences.embroidery.title',
      descriptionKey: 'experiences.embroidery.description',
      durationKey: 'experiences.embroidery.duration',
      difficultyKey: 'experiences.embroidery.difficulty',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/img_1887.jpg',
      icon: Scissors,
      contact: 'https://wa.me/YOUR_DONA_MARGARITA_NUMBER',
      buttonKey: 'experiences.cooking.button',
    },
    {
      id: 'sunset-lookout',
      titleKey: 'experiences.lookout.title',
      descriptionKey: 'experiences.lookout.description',
      durationKey: 'experiences.lookout.duration',
      difficultyKey: 'experiences.lookout.difficulty',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/finitos-lookout.jpg',
      icon: Mountain,
      contact: null,
      noteKey: 'experiences.mikancha.note',
    },
    {
      id: 'mikancha',
      titleKey: 'experiences.mikancha.title',
      descriptionKey: 'experiences.mikancha.description',
      durationKey: 'experiences.mikancha.duration',
      difficultyKey: 'experiences.mikancha.difficulty',
      image: 'https://c.animaapp.com/mk33stinvgyh8p/img/mikancha_1.jpg',
      icon: CircleDot,
      contact: null,
      noteKey: 'experiences.mikancha.note',
    },
  ];
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/cooking.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-4">
              {t('experiences.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              {t('experiences.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                      className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      style={experience.id === 'community-tour' ? { objectPosition: '50% 40%' } : undefined}
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
                      {t(experience.titleKey)}
                    </h2>
                    <p className="text-base md:text-lg text-foreground leading-body mb-6">
                      {t(experience.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-muted px-4 py-2 rounded-md">
                        <span className="text-sm font-medium text-foreground">
                          {t(experience.durationKey)}
                        </span>
                      </div>
                      <div className="bg-muted px-4 py-2 rounded-md">
                        <span className="text-sm font-medium text-foreground">
                          {t(experience.difficultyKey)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {experience.id === 'community-tour' && (
                        <>
                          <Button
                            asChild
                            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-3 text-base font-normal"
                          >
                            <Link to={experience.link}>{t(experience.aboutButtonKey)}</Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 px-6 py-3 text-base font-normal"
                          >
                            <a href={experience.guideContact} target="_blank" rel="noopener noreferrer">
                              {t(experience.guideButtonKey)}
                            </a>
                          </Button>
                        </>
                      )}
                      {experience.contact && experience.buttonKey && (
                        <Button
                          asChild
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-3 text-base font-normal"
                        >
                          <a href={experience.contact} target="_blank" rel="noopener noreferrer">
                            {t(experience.buttonKey)}
                          </a>
                        </Button>
                      )}
                      {!experience.contact && experience.id !== 'community-tour' && experience.noteKey && (
                        <p className="text-base text-muted-foreground italic">
                          {t(experience.noteKey)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
