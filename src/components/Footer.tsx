import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-4 text-primary-foreground">
              Cabeceras
            </h3>
            <p className="text-base text-primary-foreground leading-body">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-headline font-semibold mb-4 text-primary-foreground">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/experiences"
                  className="text-base text-primary-foreground hover:text-tertiary transition-colors duration-200"
                >
                  {t('nav.whatToDo')}
                </Link>
              </li>
              <li>
                <Link
                  to="/stay"
                  className="text-base text-primary-foreground hover:text-tertiary transition-colors duration-200"
                >
                  {t('nav.whereToStay')}
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-base text-primary-foreground hover:text-tertiary transition-colors duration-200"
                >
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-base text-primary-foreground hover:text-tertiary transition-colors duration-200"
                >
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-primary-foreground hover:text-tertiary transition-colors duration-200"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-headline font-semibold mb-4 text-primary-foreground">
              {t('footer.connect')}
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook width={32} height={32} strokeWidth={1.5} className="text-primary-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram width={32} height={32} strokeWidth={1.5} className="text-primary-foreground" />
              </a>
              <a
                href="mailto:info@cabeceras.cr"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail width={32} height={32} strokeWidth={1.5} className="text-primary-foreground" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground">
              info@cabeceras.cr
              <br />
              +506 1234 5678
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground">
            © {currentYear} {t('footer.copyright')}
          </p>
          <p className="text-sm text-primary-foreground mt-2">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
