import React from 'react';
import { Link } from 'react-router-dom';
import { SAMPLE_DAY_MEALS } from '../data/content';

export const MealPlanPage: React.FC = () => {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Meal Plans</span>
            <span>/</span>
            <span>Recomposition Blueprint</span>
          </div>
          <span className="eyebrow">Premium meal plan · $24.60/mo</span>
          <h1>Recomposition Blueprint</h1>
          <p className="lede">Maintenance calories with a protein target high enough to build skill strength — muscle-ups, levers, handstands — while slowly losing fat. Built around training days that actually demand more food than rest days.</p>
          <div className="meta-row">
            <div><strong>2,180</strong><span>Avg. kcal / day</span></div>
            <div><strong>168g</strong><span>Protein target</span></div>
            <div><strong>14 days</strong><span>Rotating menu</span></div>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Daily targets</span>
              <h2>The macro split behind the plan.</h2>
            </div>
            <p>Numbers shift ±8% on training vs. rest days — the full plan includes both versions of every day.</p>
          </div>
          <div className="macro-grid" data-reveal>
            <div className="box"><strong>2,180</strong><span>Calories</span></div>
            <div className="box"><strong>168g</strong><span>Protein</span></div>
            <div className="box"><strong>214g</strong><span>Carbohydrate</span></div>
            <div className="box"><strong>71g</strong><span>Fat</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Sample day</span>
              <h2>Day 4 of 14 — a training day.</h2>
            </div>
            <p>Every meal in the full plan comes with quantities, prep time, and a swap list for common allergies.</p>
          </div>
          <div className="day-table" data-reveal>
            {SAMPLE_DAY_MEALS.map((meal, idx) => (
              <div className="meal-row" key={idx}>
                <span className="tag">{meal.tag}</span>
                <span className="name">{meal.name}</span>
                <span className="kcal">{meal.kcal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Choose your plan</span>
              <h2>Recomposition Blueprint is the most chosen — here's how it compares.</h2>
            </div>
          </div>
          <div className="plans">
            <div className="plan" data-reveal>
              <h3>Lean Mass Protocol</h3>
              <p className="price">$18.40<span>/mo</span></p>
              <p className="desc">A slight surplus tuned for people adding first pull-ups and dips without piling on weight.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>7-day rotating menu</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Grocery list included</li>
              </ul>
              <Link to="/checkout?plan=lean-mass" className="btn btn-ghost btn-block">Choose Plan</Link>
            </div>
            <div className="plan feature" data-reveal>
              <span className="badge">Most chosen</span>
              <h3>Recomposition Blueprint</h3>
              <p className="price">$24.60<span>/mo</span></p>
              <p className="desc">Maintenance calories with a protein target high enough to build skill strength while losing fat.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>14-day rotating menu</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Training-day / rest-day macros</li>
              </ul>
              <Link to="/checkout?plan=recomposition" className="btn btn-primary btn-block">Unlock This Plan</Link>
            </div>
            <div className="plan" data-reveal>
              <h3>Competition Cut</h3>
              <p className="price">$31.90<span>one-time</span></p>
              <p className="desc">An 8-week deficit for people peaking strength-to-weight ratio ahead of a specific date.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>8-week structured taper</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Refeed days mapped in</li>
              </ul>
              <Link to="/checkout?plan=competition-cut" className="btn btn-ghost btn-block">Choose Plan</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
