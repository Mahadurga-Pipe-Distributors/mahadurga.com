// Shared scroll-reveal for careers pages (jobs.html, careers-*.html)
// Loaded as an external script so it satisfies script-src 'self' CSP.
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();
