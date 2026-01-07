import { Calendar, MapPin, Clock, RefreshCw, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      id: 1,
      titleKey: 'events.event1.title',
      dateKey: 'events.event1.date',
      timeKey: 'events.event1.time',
      locationKey: 'events.event1.location',
      descriptionKey: 'events.event1.description',
    },
    {
      id: 2,
      titleKey: 'events.event2.title',
      dateKey: 'events.event2.date',
      timeKey: 'events.event2.time',
      locationKey: 'events.event2.location',
      descriptionKey: 'events.event2.description',
    },
    {
      id: 3,
      titleKey: 'events.event3.title',
      dateKey: 'events.event3.date',
      timeKey: 'events.event3.time',
      locationKey: 'events.event3.location',
      descriptionKey: 'events.event3.description',
    },
  ];

  const recurringActivities = [
    {
      id: 1,
      titleKey: 'events.recurring1.title',
      scheduleKey: 'events.recurring1.schedule',
      timeKey: 'events.recurring1.time',
      locationKey: 'events.recurring1.location',
      descriptionKey: 'events.recurring1.description',
    },
    {
      id: 2,
      titleKey: 'events.recurring2.title',
      scheduleKey: 'events.recurring2.schedule',
      timeKey: 'events.recurring2.time',
      locationKey: 'events.recurring2.location',
      descriptionKey: 'events.recurring2.description',
    },
    {
      id: 3,
      titleKey: 'events.recurring3.title',
      scheduleKey: 'events.recurring3.schedule',
      timeKey: 'events.recurring3.time',
      locationKey: 'events.recurring3.location',
      descriptionKey: 'events.recurring3.description',
    },
  ];
  const handleSubmitEvent = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER?text=I%20would%20like%20to%20submit%20a%20community%20event', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-6">
            {t('events.hero.title')}
          </h1>
          <p className="text-base md:text-lg text-foreground leading-body mb-4">
            {t('events.intro.description1')}
          </p>
          <p className="text-base text-muted-foreground leading-body">
            {t('events.intro.description2')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-8">
            {t('events.upcoming.title')}
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-200"
              >
                <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                  {t(event.titleKey)}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3 text-foreground">
                    <Calendar width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{t(event.dateKey)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <Clock width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{t(event.timeKey)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <MapPin width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{t(event.locationKey)}</span>
                  </div>
                </div>
                <p className="text-base text-foreground leading-body">
                  {t(event.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <RefreshCw width={28} height={28} strokeWidth={1.5} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground">
              {t('events.recurring.title')}
            </h2>
          </div>
          <div className="space-y-6">
            {recurringActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-200"
              >
                <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
                  {t(activity.titleKey)}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3 text-foreground">
                    <Calendar width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base font-medium">{t(activity.scheduleKey)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <Clock width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{t(activity.timeKey)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <MapPin width={20} height={20} strokeWidth={1.5} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{t(activity.locationKey)}</span>
                  </div>
                </div>
                <p className="text-base text-foreground leading-body">
                  {t(activity.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
            <Plus width={48} height={48} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-4">
              {t('events.submit.title')}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-body mb-6 max-w-2xl mx-auto">
              {t('events.submit.description')}
            </p>
            <Button
              onClick={handleSubmitEvent}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 text-base font-normal"
            >
              <Plus width={20} height={20} strokeWidth={1.5} className="mr-2" />
              {t('events.submit.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
