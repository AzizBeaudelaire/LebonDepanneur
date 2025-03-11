import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-light-header text-white transition-colors duration-300 dark:bg-dark-header">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-light-primary dark:text-dark-primary" />
            <span className="text-xl font-bold">Le Bon Dépanneur</span>
          </Link>

          <div className="flex items-center space-x-8">
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
      </nav>
    </header>
  );
};