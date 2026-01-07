import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200"
      aria-label="Switch language"
    >
      <Globe width={20} height={20} strokeWidth={1.5} />
      <span className="text-sm font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
}
