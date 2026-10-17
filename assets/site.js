// Mobile menu and dropdown groups
(function () {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
  }
  const groups = document.querySelectorAll('.group-btn');
  const closeAll = except => groups.forEach(b => { if (b !== except) b.setAttribute('aria-expanded', 'false'); });
  groups.forEach(btn => {
    btn.addEventListener('click', e => {
      if (window.matchMedia('(max-width: 1080px)').matches) return;
      e.stopPropagation();
      const open = btn.getAttribute('aria-expanded') !== 'true';
      closeAll(btn);
      btn.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
})();
