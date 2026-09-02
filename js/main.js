// Apex Calisthenics — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initNewsletterForm();
});

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.mobile-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    const expanded = panel.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(expanded));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => panel.classList.remove('open'));
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initNewsletterForm() {
  const form = document.querySelector('[data-newsletter-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const input = form.querySelector('input');
    if (!input.value || !input.value.includes('@')) {
      input.focus();
      return;
    }
    const original = button.textContent;
    button.textContent = 'Added';
    input.value = '';
    setTimeout(() => {
      button.textContent = original;
    }, 2400);
  });
}
