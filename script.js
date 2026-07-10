// ===== Mobiles Menü =====
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Menü nach Klick auf einen Link schließen (mobil)
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Kontaktformular =====
// Hinweis: Dieses Formular ist rein clientseitig. Damit Anfragen wirklich
// ankommen, muss es an einen Versanddienst (z. B. Formspree, Netlify Forms)
// oder ein eigenes Backend per E-Mail angebunden werden.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      formNote.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
      formNote.style.color = '#B3432B';
      return;
    }

    formNote.textContent = 'Danke! Ihre Nachricht wurde erfasst — bitte Versand noch anbinden (siehe script.js).';
    formNote.style.color = 'var(--color-pine)';
    form.reset();
  });
}

// ===== Jahr im Footer =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Sanftes Einblenden beim Scrollen =====
const revealTargets = document.querySelectorAll('.display-card, .window-card, .price-tag, .process__step');

if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
}
