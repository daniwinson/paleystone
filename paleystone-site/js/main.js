// PALEY Stone & Tile Forensics — shared behavior

// Mobile nav toggle
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Case study category filter
(function () {
  var chips = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('[data-category]');
  if (!chips.length || !cards.length) return;
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
      var filter = chip.getAttribute('data-filter');
      cards.forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

// Footer year
(function () {
  var el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
})();
