import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkoutDetailPage } from './pages/WorkoutDetailPage';
import { MealPlanPage } from './pages/MealPlanPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const isNotFound = !['/', '/workout-detail', '/meal-plan', '/checkout'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout-detail" element={<WorkoutDetailPage />} />
          <Route path="/meal-plan" element={<MealPlanPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isNotFound && <Footer />}
    </>
  );
};
