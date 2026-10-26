import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isWorkoutDetail = location.pathname === '/workout-detail';
  const isMealPlan = location.pathname === '/meal-plan';
  const isCheckout = location.pathname === '/checkout';

  const handleNavClick = (hash?: string) => {
    setMobileOpen(false);
    if (hash) {
      if (isHome) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <img src="/assets/icons/favicon.svg" alt="" width="30" height="30" />
          <span className="brand-text">APEX<span>.</span>CALISTHENICS</span>
        </Link>
        <div className="nav-links">
          {isHome ? (
            <a href="#guides" className="active" onClick={() => handleNavClick('guides')}>Guides</a>
          ) : (
            <Link to="/#guides">Guides</Link>
          )}
          {isHome ? (
            <a href="#workouts" onClick={() => handleNavClick('workouts')}>Free Workouts</a>
          ) : (
            <Link to="/#workouts" className={isWorkoutDetail ? 'active' : ''}>Free Workouts</Link>
          )}
          <Link to="/meal-plan" className={isMealPlan ? 'active' : ''}>Meal Plans</Link>
          {isHome ? (
            <a href="#community" onClick={() => handleNavClick('community')}>Community</a>
          ) : (
            <Link to="/#community">Community</Link>
          )}
        </div>
        <div className="nav-cta">
          {isCheckout ? (
            <Link to="/" className="btn btn-ghost">Back Home</Link>
          ) : (
            <Link to="/checkout" className="btn btn-ghost">Reserve a Plan</Link>
          )}

          {isWorkoutDetail ? (
            <a href="#exercises" className="btn btn-primary" onClick={() => handleNavClick('exercises')}>Start Now</a>
          ) : isMealPlan ? (
            <Link to="/checkout?plan=recomposition" className="btn btn-primary">Unlock This Plan</Link>
          ) : isCheckout ? null : (
            <Link to="/workout-detail" className="btn btn-primary">Start Free</Link>
          )}

          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`}>
        {isHome ? (
          <a href="#guides" onClick={() => handleNavClick('guides')}>Guides</a>
        ) : (
          <Link to="/#guides" onClick={() => setMobileOpen(false)}>Guides</Link>
        )}
        {isHome ? (
          <a href="#workouts" onClick={() => handleNavClick('workouts')}>Free Workouts</a>
        ) : (
          <Link to="/#workouts" onClick={() => setMobileOpen(false)}>Free Workouts</Link>
        )}
        <Link to="/meal-plan" onClick={() => setMobileOpen(false)}>Meal Plans</Link>
        {isHome ? (
          <a href="#community" onClick={() => handleNavClick('community')}>Community</a>
        ) : (
          <Link to="/#community" onClick={() => setMobileOpen(false)}>Community</Link>
        )}
        {!isCheckout && (
          <Link to="/checkout" onClick={() => setMobileOpen(false)}>Reserve a Plan</Link>
        )}
      </div>
    </nav>
  );
};
