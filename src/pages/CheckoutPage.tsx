import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PLANS, Plan } from '../data/content';

export const CheckoutPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPlan = searchParams.get('plan');

  const [selectedPlanKey, setSelectedPlanKey] = useState<'lean-mass' | 'recomposition' | 'competition-cut'>(() => {
    if (requestedPlan && PLANS[requestedPlan]) {
      return requestedPlan as 'lean-mass' | 'recomposition' | 'competition-cut';
    }
    return 'recomposition';
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedPlan, setConfirmedPlan] = useState<Plan | null>(null);
  const [confirmedEmail, setConfirmedEmail] = useState('');

  useEffect(() => {
    if (requestedPlan && PLANS[requestedPlan]) {
      setSelectedPlanKey(requestedPlan as 'lean-mass' | 'recomposition' | 'competition-cut');
    }
  }, [requestedPlan]);

  const handlePlanChange = (key: 'lean-mass' | 'recomposition' | 'competition-cut') => {
    setSelectedPlanKey(key);
    setSearchParams({ plan: key });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!fullName.trim()) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!valid) return;

    const plan = PLANS[selectedPlanKey];
    setConfirmedPlan(plan);
    setConfirmedEmail(email.trim());
    setIsSubmitted(true);
  };

  const currentPlan = PLANS[selectedPlanKey];
  const formattedPrice = `$${currentPlan.price.toFixed(2)}${currentPlan.cadence}`;

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/meal-plan">Meal Plans</Link>
            <span>/</span>
            <span>Reserve</span>
          </div>
          <span className="eyebrow">Reserve your plan</span>
          <h1>One step from your first weekly menu.</h1>
          <p className="lede">Payment isn't wired up on this preview yet — reserving a spot below sends your details to the Apex team, who follow up by email to complete setup.</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="checkout-grid">
            <div className="form-card">
              {!isSubmitted ? (
                <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                  <div className={`field ${nameError ? 'invalid' : ''}`} data-field="name">
                    <label htmlFor="full-name">Full name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="name"
                      placeholder="Dana Okwuosa"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (nameError && e.target.value.trim()) setNameError(false);
                      }}
                      required
                    />
                    <span className="error">Enter your full name.</span>
                  </div>

                  <div className={`field ${emailError ? 'invalid' : ''}`} data-field="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="dana@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value.trim())) {
                          setEmailError(false);
                        }
                      }}
                      required
                    />
                    <span className="error">Enter a valid email address.</span>
                  </div>

                  <div className="field">
                    <label>Plan</label>
                    <div className="plan-select">
                      <label
                        className={`plan-option ${selectedPlanKey === 'lean-mass' ? 'checked' : ''}`}
                        onClick={() => handlePlanChange('lean-mass')}
                      >
                        <span>
                          <input
                            type="radio"
                            name="plan"
                            value="lean-mass"
                            checked={selectedPlanKey === 'lean-mass'}
                            onChange={() => handlePlanChange('lean-mass')}
                          />{' '}
                          Lean Mass Protocol
                        </span>
                        <span className="p-price">$18.40/mo</span>
                      </label>

                      <label
                        className={`plan-option ${selectedPlanKey === 'recomposition' ? 'checked' : ''}`}
                        onClick={() => handlePlanChange('recomposition')}
                      >
                        <span>
                          <input
                            type="radio"
                            name="plan"
                            value="recomposition"
                            checked={selectedPlanKey === 'recomposition'}
                            onChange={() => handlePlanChange('recomposition')}
                          />{' '}
                          Recomposition Blueprint
                        </span>
                        <span className="p-price">$24.60/mo</span>
                      </label>

                      <label
                        className={`plan-option ${selectedPlanKey === 'competition-cut' ? 'checked' : ''}`}
                        onClick={() => handlePlanChange('competition-cut')}
                      >
                        <span>
                          <input
                            type="radio"
                            name="plan"
                            value="competition-cut"
                            checked={selectedPlanKey === 'competition-cut'}
                            onChange={() => handlePlanChange('competition-cut')}
                          />{' '}
                          Competition Cut
                        </span>
                        <span className="p-price">$31.90</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Reserve My Spot
                  </button>
                  <p className="note-line">
                    No payment is collected on this preview — you'll get an email to finish setup.
                  </p>
                </form>
              ) : (
                <div className="confirm-panel show">
                  <div className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>Spot reserved</h3>
                  <p data-confirm-detail>
                    A confirmation for the {confirmedPlan?.name} plan is on its way to {confirmedEmail}. Your first week of meals lands within 24 hours.
                  </p>
                </div>
              )}
            </div>

            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Plan</span>
                <strong data-summary-name>{currentPlan.name}</strong>
              </div>
              <div className="summary-line">
                <span>Price</span>
                <strong data-summary-price>{formattedPrice}</strong>
              </div>
              <div className="summary-line">
                <span>Billing cycle</span>
                <strong>{selectedPlanKey === 'competition-cut' ? 'One-time payment' : 'Monthly, cancel anytime'}</strong>
              </div>
              <div className="summary-total">
                <span>Due today</span>
                <span data-summary-total>{formattedPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
