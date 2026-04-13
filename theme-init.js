(function () {
  var t = localStorage.getItem('mdp-theme') || 'light';
  var l = localStorage.getItem('mdp-lang');
  document.documentElement.setAttribute('data-theme', t);
  if (l) document.documentElement.setAttribute('data-lang', l);
})();
