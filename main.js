// --- Nav scroll state ---
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 50);
  backToTop.classList.toggle('visible', y > 400);
  updateActiveNav();
}, { passive: true });

backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Active nav link on scroll ---
function updateActiveNav() {
  const ids = ['home', 'products', 'industries', 'why', 'location'];
  const links = document.querySelectorAll('.nav-links a');
  let current = 'home';

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) current = id;
  });

  links.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active',
      href === '#' + current ||
      (current === 'home' && href === '#')
    );
  });
}

// --- Intersection Observer: scroll reveal ---
const revealAll = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealAll.forEach(el => revealObs.observe(el));

// --- Stat counter animation ---
function animateCounter(el) {
  const target   = parseFloat(el.dataset.count);
  const suffix   = el.dataset.suffix  || '';
  const decimals = parseInt(el.dataset.decimal || 0);
  const duration = 1500;
  const startTs  = performance.now();

  (function tick(now) {
    const t = Math.min((now - startTs) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (eased * target).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  })(performance.now());
}

const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const counter = entry.target.querySelector('[data-count]');
    if (counter) animateCounter(counter);
    statObs.unobserve(entry.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(s => statObs.observe(s));
