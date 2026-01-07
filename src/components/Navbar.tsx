import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const navItems = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.whatToDo', path: '/experiences' },
  { labelKey: 'nav.whereToStay', path: '/stay' },
  { labelKey: 'nav.events', path: '/events' },
  { labelKey: 'nav.faq', path: '/faq' },
  { labelKey: 'nav.contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background shadow-md' : 'bg-background/95 backdrop-blur-sm'
        }`}
        style={{ minHeight: '64px' }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="text-2xl font-headline font-semibold text-foreground hover:text-primary transition-colors duration-200"
            >
              Cabeceras
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className={`px-4 py-2 text-base font-normal text-foreground hover:text-primary transition-colors duration-200 cursor-pointer ${
                            location.pathname === item.path
                              ? 'text-primary font-medium'
                              : ''
                          }`}
                        >
                          {t(item.labelKey)}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X width={32} height={32} strokeWidth={1.5} />
              ) : (
                <Menu width={32} height={32} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-0 bottom-0 w-64 bg-background shadow-xl">
            <NavigationMenu className="p-6">
              <NavigationMenuList className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 text-base font-normal text-foreground hover:text-primary hover:bg-muted transition-all duration-200 rounded-md cursor-pointer ${
                          location.pathname === item.path
                            ? 'text-primary bg-muted font-medium'
                            : ''
                        }`}
                      >
                        {t(item.labelKey)}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <LanguageSwitcher />
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </>
  );
}
