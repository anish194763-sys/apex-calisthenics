import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../data/content';

export const HomePage: React.FC = () => {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Bodyweight only — no gym, no excuses</span>
            <h1>Gravity is the<br />only weight<br /><em>rack you need.</em></h1>
            <p className="lede">Structured push, pull, and core progressions built entirely around leverage. Learn the mechanics behind muscle-ups, levers, and handstands without walking into a gym.</p>
            <div className="hero-ctas">
              <Link to="/workout-detail" className="btn btn-primary">
                Start the Foundations Program
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/meal-plan" className="btn btn-ghost">See the Meal Plans</Link>
            </div>
            <div className="hero-proof">
              <div><strong>3,412</strong><span>Reps logged this week</span></div>
              <div><strong>41 days</strong><span>Avg. time to first pull-up</span></div>
              <div><strong>126</strong><span>Free movement tutorials</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="figure">
              <svg viewBox="0 0 200 240" width="100%" height="100%" fill="none">
                <line x1="20" y1="30" x2="180" y2="30" stroke="#3a332584" strokeWidth="4" strokeLinecap="round" />
                <circle cx="20" cy="30" r="6" fill="#221e17" stroke="#ff5a1f" strokeWidth="3" />
                <path d="M20 36 C 55 60, 60 95, 95 100 C 130 105, 150 80, 158 55" stroke="#ff5a1f" strokeWidth="5" fill="none" strokeLinecap="round" />
                <circle cx="158" cy="52" r="9" fill="#ff5a1f" />
                <path d="M95 100 C 100 130, 96 165, 90 195" stroke="#b9c26a" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M95 100 C 108 128, 112 160, 118 190" stroke="#b9c26a" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="tag">
              <p>Movement of the week</p>
              <p>Front lever progression — hollow-body hangs into tuck lever holds, 4 × 12s.</p>
            </div>
          </div>
        </div>
      </header>

      <section id="guides">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Muscle-building guides</span>
              <h2>Everything a barbell does, leverage does too.</h2>
            </div>
            <p>Four ways the Apex method replaces machines and plates with joint angles, tempo, and patience.</p>
          </div>
          <div className="bento">
            <div className="card wide" data-reveal>
              <span className="num">01</span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12h4M16 12h4M8 12a4 4 0 004-4M16 12a4 4 0 01-4 4" />
                </svg>
              </div>
              <h3>Leverage progression maps</h3>
              <p>Every advanced skill — planche, front lever, human flag — broken into 5 to 8 checkpoint holds so you always know the next honest step.</p>
            </div>
            <div className="card narrow" data-reveal>
              <span className="num">02</span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M4 8l8-6 8 6M4 16l8 6 8-6" />
                </svg>
              </div>
              <h3>Tempo-based overload</h3>
              <p>No dumbbells to add. Instead, slower eccentrics and paused reps make bodyweight movements harder on schedule.</p>
            </div>
            <div className="card narrow" data-reveal>
              <span className="num">03</span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <h3>Joint-angle drills</h3>
              <p>Isometric holds at the exact angle where your current strength runs out, targeted with short daily doses.</p>
            </div>
            <div className="card wide" data-reveal>
              <span className="num">04</span>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 019-3 5 5 0 019 3c0 4.5-4 8-10 11z" />
                </svg>
              </div>
              <h3>Form cues that actually stick</h3>
              <p>Cueing written for people training alone in front of a phone camera, not a coach standing beside a squat rack.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="workouts">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Free workouts</span>
              <h2>Three routines. Zero equipment. Start today.</h2>
            </div>
            <p>Pick a routine, follow the sets and tempo, and log your own numbers — no sign-up wall on any of these.</p>
          </div>
          <div className="carousel">
            <div className="workout-card" data-reveal>
              <span className="level">Beginner · Full body</span>
              <h3>Foundations: Push–Pull Reset</h3>
              <p>Six movements that rebuild honest strength in the shoulders, back, and core before anything fancier.</p>
              <div className="meta">
                <div><strong>25 min</strong>Duration</div>
                <div><strong>6</strong>Exercises</div>
                <div><strong>None</strong>Equipment</div>
              </div>
              <Link to="/workout-detail" className="go">
                View routine <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="workout-card" data-reveal>
              <span className="level">Intermediate · Upper body</span>
              <h3>Skill Ladder: Toward Your First Muscle-Up</h3>
              <p>A progression of pulling and transition drills aimed squarely at the hardest calisthenics milestone.</p>
              <div className="meta">
                <div><strong>35 min</strong>Duration</div>
                <div><strong>8</strong>Exercises</div>
                <div><strong>Bar</strong>Equipment</div>
              </div>
              <Link to="/workout-detail" className="go">
                View routine <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="workout-card" data-reveal>
              <span className="level">All levels · Core</span>
              <h3>Core Architecture: Hollow Body Circuit</h3>
              <p>Five positions that build the trunk tension every lever and handstand actually depends on.</p>
              <div className="meta">
                <div><strong>20 min</strong>Duration</div>
                <div><strong>5</strong>Exercises</div>
                <div><strong>Mat</strong>Equipment</div>
              </div>
              <Link to="/workout-detail" className="go">
                View routine <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="meals">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Premium meal plans</span>
              <h2>Eating for leverage strength isn't the same as eating for a barbell total.</h2>
            </div>
            <p>Three plans built around bodyweight training volume — pick the one that matches your goal, not a generic macro split.</p>
          </div>
          <div className="plans">
            <div className="plan" data-reveal>
              <h3>Lean Mass Protocol</h3>
              <p className="price">$18.40<span>/mo</span></p>
              <p className="desc">A slight surplus tuned for people adding first pull-ups and dips without piling on weight.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>7-day rotating menu</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Grocery list included</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Protein-forward, budget-aware</li>
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
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Weekly grocery + prep guide</li>
              </ul>
              <Link to="/meal-plan" className="btn btn-primary btn-block">View Full Plan</Link>
            </div>
            <div className="plan" data-reveal>
              <h3>Competition Cut</h3>
              <p className="price">$31.90<span>one-time</span></p>
              <p className="desc">An 8-week deficit for people peaking strength-to-weight ratio ahead of a specific date.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>8-week structured taper</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Refeed days mapped in</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Strength-retention checklist</li>
              </ul>
              <Link to="/checkout?plan=competition-cut" className="btn btn-ghost btn-block">Choose Plan</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="community">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">From the community</span>
              <h2>People training alone, getting stronger anyway.</h2>
            </div>
          </div>
          <div className="quotes">
            {TESTIMONIALS.map((q, idx) => (
              <div className="quote" data-reveal key={idx}>
                <p className="body">{q.body}</p>
                <div className="person">
                  <div className="avatar">{q.avatar}</div>
                  <div>
                    <strong>{q.name}</strong>
                    <span>{q.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band" data-reveal>
            <h2>Your first honest pull-up starts with today's 25 minutes.</h2>
            <Link to="/workout-detail" className="btn btn-primary">Start the Foundations Program</Link>
          </div>
        </div>
      </section>
    </>
  );
};
