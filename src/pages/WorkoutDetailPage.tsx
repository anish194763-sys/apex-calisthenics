import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDATIONS_EXERCISES } from '../data/content';

export const WorkoutDetailPage: React.FC = () => {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#workouts">Free Workouts</Link>
            <span>/</span>
            <span>Foundations</span>
          </div>
          <span className="eyebrow">Beginner · Full body</span>
          <h1>Foundations: Push–Pull Reset</h1>
          <p className="lede">Six movements that rebuild honest strength in the shoulders, back, and core before anything fancier. Run this three times a week for four weeks before moving to the Skill Ladder.</p>
          <div className="meta-row">
            <div><strong>25 min</strong><span>Duration</span></div>
            <div><strong>6</strong><span>Exercises</span></div>
            <div><strong>None</strong><span>Equipment</span></div>
            <div><strong>3×/week</strong><span>Frequency</span></div>
          </div>
        </div>
      </header>

      <section id="exercises">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">The routine</span>
              <h2>Six moves, three rounds, full attention to tempo.</h2>
            </div>
            <p>Rest 60–75 seconds between exercises. Move to round two only after all six are done once.</p>
          </div>

          {FOUNDATIONS_EXERCISES.map((ex) => (
            <div className="exercise" data-reveal key={ex.index}>
              <span className="index">{ex.index}</span>
              <div>
                <h3>{ex.name}</h3>
                <p>{ex.description}</p>
              </div>
              <div className="stat">{ex.sets}<span>{ex.label}</span></div>
            </div>
          ))}

          <div className="coach-note" data-reveal>
            <strong>Coaching note —</strong> if the pike push-up feels too easy by week two, raise your feet another few centimetres rather than adding reps past 10. Range of motion builds the shoulder strength this routine is actually chasing.
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band" data-reveal>
            <h2>Training is only half the equation — dial in what you eat around it.</h2>
            <Link to="/meal-plan" className="btn btn-primary">View the Meal Plans</Link>
          </div>
        </div>
      </section>
    </>
  );
};
