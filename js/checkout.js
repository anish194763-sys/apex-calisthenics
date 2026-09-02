// Apex Calisthenics — checkout / plan reservation flow
// No payment processor is wired up yet, so this collects a reservation
// request and shows a confirmation state instead of charging a card.

const PLANS = {
  'lean-mass': { name: 'Lean Mass Protocol', price: 18.4, cadence: '/mo' },
  recomposition: { name: 'Recomposition Blueprint', price: 24.6, cadence: '/mo' },
  'competition-cut': { name: 'Competition Cut', price: 31.9, cadence: ' one-time' },
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.checkout-form');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('plan');
  const initialPlan = PLANS[requested] ? requested : 'recomposition';

  const options = Array.from(form.querySelectorAll('.plan-option'));
  const summaryName = document.querySelector('[data-summary-name]');
  const summaryPrice = document.querySelector('[data-summary-price]');
  const summaryTotal = document.querySelector('[data-summary-total]');

  function selectPlan(key) {
    const plan = PLANS[key];
    if (!plan) return;
    options.forEach((opt) => {
      const input = opt.querySelector('input');
      const isMatch = input.value === key;
      input.checked = isMatch;
      opt.classList.toggle('checked', isMatch);
    });
    const formatted = `$${plan.price.toFixed(2)}${plan.cadence}`;
    if (summaryName) summaryName.textContent = plan.name;
    if (summaryPrice) summaryPrice.textContent = formatted;
    if (summaryTotal) summaryTotal.textContent = formatted;
  }

  options.forEach((opt) => {
    opt.addEventListener('click', () => selectPlan(opt.querySelector('input').value));
  });

  selectPlan(initialPlan);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    const nameField = form.querySelector('[data-field="name"]');
    const nameInput = nameField.querySelector('input');
    if (!nameInput.value.trim()) {
      nameField.classList.add('invalid');
      valid = false;
    } else {
      nameField.classList.remove('invalid');
    }

    const emailField = form.querySelector('[data-field="email"]');
    const emailInput = emailField.querySelector('input');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    if (!emailOk) {
      emailField.classList.add('invalid');
      valid = false;
    } else {
      emailField.classList.remove('invalid');
    }

    if (!valid) return;

    const selected = form.querySelector('input[name="plan"]:checked');
    const plan = PLANS[selected.value];

    form.classList.add('hide');
    const confirm = document.querySelector('.confirm-panel');
    if (confirm) {
      const detail = confirm.querySelector('[data-confirm-detail]');
      if (detail) {
        detail.textContent = `A confirmation for the ${plan.name} plan is on its way to ${emailInput.value.trim()}. Your first week of meals lands within 24 hours.`;
      }
      confirm.classList.add('show');
    }
  });
});
