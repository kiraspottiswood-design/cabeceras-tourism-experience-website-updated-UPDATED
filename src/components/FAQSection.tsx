import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is the community tour really free?',
    answer: 'Yes! We welcome all visitors to explore Cabeceras at no cost. We operate on a donation-based model, and any contributions go directly to supporting community projects, youth education, and local artisans. Your curiosity and respect are what matter most.',
  },
  {
    question: 'How do I get to Cabeceras?',
    answer: 'Cabeceras is located between Monteverde and La Fortuna, approximately 30 minutes from Monteverde Cloud Forest. You can reach us by car, local bus, or arrange transportation through your accommodation. We recommend checking road conditions during rainy season.',
  },
  {
    question: 'Do I need to book experiences in advance?',
    answer: 'While the self-guided community tour is always available, we recommend booking cooking classes, workshops, and guided experiences at least 24-48 hours in advance to ensure availability. Contact us via WhatsApp or email to arrange.',
  },
  {
    question: 'What should I bring for the tour?',
    answer: 'Comfortable walking shoes, sun protection, water, and a camera are recommended. The tour involves moderate walking on unpaved paths. We also suggest bringing small bills if you wish to make purchases at local shops or leave donations.',
  },
  {
    question: 'Is Cabeceras suitable for families with children?',
    answer: 'Absolutely! Cabeceras is very family-friendly. Children enjoy interacting with local kids, learning about farming, and exploring nature. The cooking classes and craft workshops are particularly popular with families.',
  },
  {
    question: 'How long should I plan to spend in Cabeceras?',
    answer: 'Most visitors spend 2-4 hours on the community tour, but we recommend staying at least a full day to truly experience local life. Many travelers choose to stay overnight in one of our guesthouses to fully immerse themselves.',
  },
  {
    question: 'What languages are spoken?',
    answer: 'Spanish is the primary language, but many community members speak basic English. Our guides are bilingual, and we find that language barriers often lead to the most memorable and creative exchanges!',
  },
  {
    question: 'How does tourism benefit the community?',
    answer: 'All tourism activities directly support local families, fund youth education programs, provide income for women artisans, and help maintain community infrastructure. We practice ethical, community-led tourism that empowers residents.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background animate-on-scroll">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-foreground leading-body max-w-2xl mx-auto">
            Everything you need to know about visiting Cabeceras.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-headline text-foreground hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground leading-body pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
