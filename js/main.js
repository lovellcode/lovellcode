// Her Collective — interactions

// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close the mobile menu after choosing a link
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Reveal-on-scroll
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.documentElement.classList.add('no-observer');
}

// Contact form: no backend yet, so acknowledge locally.
// Swap the submit handler for a real endpoint (e.g. Formspree/Netlify) when available.
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const note = form.querySelector('.form-note');
  note.hidden = false;
  form.querySelector('button[type="submit"]').disabled = true;
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
