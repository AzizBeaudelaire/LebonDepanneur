import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light-header text-white transition-colors duration-300 dark:bg-dark-header">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-light-primary dark:text-dark-primary" />
            <span className="text-xl font-bold">Le Bon Dépanneur</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link 
              to="/" 
              className="rounded-md px-3 py-2 text-white transition-colors hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className="text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary"
            >
              Services
            </Link>
            <Link 
              to="/zone-intervention" 
              className="text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary"
            >
              Zone d'intervention
            </Link>
            <Link 
              to="/contact" 
              className="text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-white transition-colors hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/zone-intervention"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Zone d'intervention
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="mt-4 flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="mr-2 h-5 w-5" />
                  Mode sombre
                </>
              ) : (
                <>
                  <Sun className="mr-2 h-5 w-5" />
                  Mode clair
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};