// ============================
// main.js - Animazioni per Axentia Automation
// ============================

// ============================
// FADE IN ON SCROLL
// ============================
const faders = document.querySelectorAll('.section-title, .vision-text, .vision-quote, .step, .card, .future p');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ============================
// STEP NUMBER ANIMATION
// ============================
const steps = document.querySelectorAll('.step-number');
steps.forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.style.transform = 'scale(1.3)';
  });
  step.addEventListener('mouseleave', () => {
    step.style.transform = 'scale(1)';
  });
});

// ============================
// CARD HOVER SHADOW ANIMATION
// ============================
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
    card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
  });
});
