import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Notify Me');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      return;
    }
    setButtonText('Added');
    setEmail('');
    setTimeout(() => {
      setButtonText('Notify Me');
    }, 2400);
  };

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link to="/" className="brand">
              <img src="/assets/icons/favicon.svg" alt="" width="30" height="30" />
              <span className="brand-text">APEX<span>.</span>CALISTHENICS</span>
            </Link>
            <p>Bodyweight strength training built around leverage, tempo, and patience — no gym required.</p>
            <form className="foot-form" data-newsletter-form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{buttonText}</button>
            </form>
          </div>
          <div className="foot-col">
            <h4>Train</h4>
            <ul>
              <li><Link to="/#guides">Guides</Link></li>
              <li><Link to="/#workouts">Free Workouts</Link></li>
              <li><Link to="/workout-detail">Foundations Program</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Nutrition</h4>
            <ul>
              <li><Link to="/meal-plan">Meal Plans</Link></li>
              <li><Link to="/checkout">Reserve a Plan</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@apexcalisthenics.com">support@apexcalisthenics.com</a></li>
              <li><Link to="/#community">Community stories</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Apex Calisthenics. Built for the bar, the park, and the living room floor.</span>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="4" />
                <path d="M10 9l5 3-5 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
