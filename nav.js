// ─────────────────────────────────────────────
// MENU BURGER — tiroir latéral : navigation vers les branches + langue FR/EN
// Commun à index.html et branche.html
// ─────────────────────────────────────────────
(function () {
  const onHome = () => !!document.getElementById('branch-sections');
  const currentId = new URLSearchParams(location.search).get('id');

  function renderDrawer() {
    const home = onHome();
    const link = id => (home ? '' : 'index.html') + '#' + id;

    document.getElementById('drawer').innerHTML = `
      <div class="drawer-head">
        <span class="drawer-brand">BDA IESEG</span>
      </div>
      <nav class="drawer-nav">
        <a href="${home ? '#' : 'index.html'}" class="drawer-home">${t('menu_home')}</a>
        <div class="drawer-label">${t('menu_branches')}</div>
        ${BRANCHES.map((b, i) => `
          <a href="${link(b.id)}" style="--c:${b.color}"${b.id === currentId ? ' aria-current="page"' : ''}>
            <span class="drawer-num">${String(i + 1).padStart(2, '0')}</span>${tb(b, 'short')}
          </a>`).join('')}
      </nav>
      <div class="drawer-lang">
        <div class="drawer-label">${t('menu_lang')}</div>
        <div class="lang-toggle" role="group" aria-label="${t('menu_lang')}">
          <button type="button" data-lang="fr" aria-pressed="${LANG === 'fr'}">FRA</button>
          <button type="button" data-lang="en" aria-pressed="${LANG === 'en'}">ENG</button>
        </div>
      </div>
    `;
  }

  function isOpen() {
    return document.getElementById('drawer').classList.contains('open');
  }

  function setOpen(open) {
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    drawer.classList.toggle('open', open);
    document.getElementById('drawer-backdrop').classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', t(open ? 'menu_close' : 'menu_open'));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) drawer.querySelector('a').focus({ preventScroll: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
      <button class="burger" id="burger" type="button" aria-controls="drawer" aria-expanded="false" aria-label="${t('menu_open')}">
        <span></span><span></span><span></span>
      </button>
      <div class="drawer-backdrop" id="drawer-backdrop"></div>
      <aside class="drawer" id="drawer" aria-hidden="true"></aside>
    `);
    renderDrawer();

    document.getElementById('burger').addEventListener('click', () => setOpen(!isOpen()));
    document.getElementById('drawer-backdrop').addEventListener('click', () => setOpen(false));

    document.getElementById('drawer').addEventListener('click', e => {
      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) { setLang(langBtn.dataset.lang); return; }
      // Un lien ferme le tiroir (le défilement vers l'ancre se fait ensuite)
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen()) setOpen(false);
    });
  });

  document.addEventListener('langchange', () => {
    renderDrawer();
    document.getElementById('burger').setAttribute('aria-label', t(isOpen() ? 'menu_close' : 'menu_open'));
    // Le tiroir a été reconstruit : on garde le focus sur le bouton de langue
    if (isOpen()) document.querySelector(`.lang-toggle [data-lang="${LANG}"]`).focus();
  });
})();
