// ─────────────────────────────────────────────
// ONE-PAGE — une section par branche + menu collant
// ─────────────────────────────────────────────
function renderSections() {
  const total = String(BRANCHES.length).padStart(2, '0');

  document.getElementById('branch-sections').innerHTML = BRANCHES.map((b, i) => `
    <section class="branch-panel" id="${b.id}" style="--c:${b.color}">
      <div class="panel-media">
        <img src="${b.photo}" alt="${tb(b, 'name')}" style="object-position:${b.photoPos}" ${i > 0 ? 'loading="lazy"' : ''}>
      </div>
      <div class="panel-content">
        <div class="panel-num">${String(i + 1).padStart(2, '0')} <span>/ ${total}</span></div>
        <h2 class="panel-name">${tb(b, 'short')}</h2>
        <p class="panel-tagline">${tb(b, 'tagline')}</p>
        <p class="panel-desc">${tb(b, 'desc')}</p>
        ${b.collab ? `<div class="panel-collab">${tb(b, 'collab')}</div>` : ''}
        <a class="panel-btn" href="branche.html?id=${b.id}">
          ${t('learn_more')}
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  `).join('');

  document.getElementById('section-nav').innerHTML =
    BRANCHES.map(b => `<a href="#${b.id}" style="--c:${b.color}">${tb(b, 'short')}</a>`).join('');
}

// Surligne dans le menu la section en cours de lecture
let spy;
function initScrollSpy() {
  if (spy) spy.disconnect();
  const nav = document.getElementById('section-nav');
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));

  spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => {
        const active = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', active);
        // Garde le lien actif visible dans le menu défilant (mobile)
        if (active) nav.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => spy.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  renderSections();
  initScrollSpy();

  // Les sections sont créées en JS : on rejoue l'ancre (#cinema…) une fois qu'elles existent
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
});

// Changement de langue : on reconstruit les sections et le menu
document.addEventListener('langchange', () => {
  renderSections();
  initScrollSpy();
});
