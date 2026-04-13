(function () {
  var t = localStorage.getItem('mdp-theme');
  var l = localStorage.getItem('mdp-lang');
  if (t) document.documentElement.setAttribute('data-theme', t);
  if (l) document.documentElement.setAttribute('data-lang', l);
})();
