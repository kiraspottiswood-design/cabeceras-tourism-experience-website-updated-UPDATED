import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQPage() {
  const { t } = useLanguage();

  const faqs = [
    {
      questionKey: 'faq.question1',
      answerKey: 'faq.answer1',
    },
    {
      questionKey: 'faq.question2',
      answerKey: 'faq.answer2',
    },
    {
      questionKey: 'faq.question3',
      answerKey: 'faq.answer3',
    },
    {
      questionKey: 'faq.question7',
      answerKey: 'faq.answer7',
    },
    {
      questionKey: 'faq.question10',
      answerKey: 'faq.answer10',
    },
  ];
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mk33stinvgyh8p/img/img_0808-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-primary-foreground mb-4">
              {t('faq.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-body">
              {t('faq.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-headline text-foreground hover:text-primary transition-colors duration-200">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground leading-body pt-2 pb-4">
                    {t(faq.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">
            {t('faq.stillQuestions.title')}
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto mb-8">
            {t('faq.stillQuestions.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 text-base font-normal"
          >
            <a href="/contact">{t('faq.stillQuestions.button')}</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
