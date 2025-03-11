import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex min-h-screen flex-col bg-light-background text-light-text transition-colors duration-200 dark:bg-dark-background dark:text-dark-text">
            <Header />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
            {/* Fixed Emergency Button */}
            <a
              href="tel:+33500000000"
              className="fixed bottom-6 right-6 flex items-center space-x-2 rounded-full bg-light-primary px-6 py-3 text-white shadow-lg transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Urgence 24/7</span>
            </a>
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;