// ─────────────────────────────────────────────
// BRANCH PAGE — Load content from URL param
// ─────────────────────────────────────────────

const params = new URLSearchParams(window.location.search);
const brancheId = params.get('id');
const branch = BRANCHES.find(b => b.id === brancheId);

if (!branch) {
  window.location.href = 'index.html';
}

// Noir ou blanc selon la couleur de fond (lisibilité sur bronze / vert)
function inkOn(hex) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) > 140 ? '#000' : '#fff';
}

// ─── POPULATE PAGE ───
function populatePage() {
  const name = tb(branch, 'name');
  document.title = `BDA IESEG — ${name}`;

  // Retour vers la section de la branche sur la page d'accueil
  document.getElementById('back-link').href = `index.html#${branch.id}`;

  // Hero
  const heroImg = document.getElementById('hero-img');
  heroImg.src = branch.photo;
  heroImg.alt = name;
  heroImg.style.objectFit = branch.heroFit || 'cover';
  heroImg.style.objectPosition = branch.heroPos || branch.photoPos;

  document.getElementById('branch-hero').style.setProperty('--branch-color', branch.color);

  const tag = document.getElementById('branch-tag');
  tag.innerHTML = branch.tagIcon + ' ' + name;
  tag.style.background = branch.color;
  tag.style.color = inkOn(branch.color);
  tag.querySelector('svg').style.stroke = inkOn(branch.color);

  document.getElementById('branch-title').textContent = tb(branch, 'tagline');
  document.getElementById('branch-tagline').textContent = tb(branch, 'desc');

  const collabEl = document.getElementById('branch-collab-hero');
  if (branch.collab) {
    collabEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> ${tb(branch, 'collab')}`;
    collabEl.style.display = 'inline-flex';
  }

  // Description (support \n paragraph breaks)
  const descEl = document.getElementById('branch-description');
  descEl.innerHTML = tb(branch, 'description')
    .split('\n\n')
    .map(p => `<p>${p}</p>`)
    .join('');

  // Activities
  const actEl = document.getElementById('branch-activities');
  actEl.innerHTML = branch.activities.map((a, i) => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${branch.color}; color:${inkOn(branch.color)}">
        ${a.icon}
      </div>
      <span>${tActivity(branch, i)}</span>
    </div>
  `).join('');

  // Form (le titre et le message de succès sont recréés à chaque changement de langue)
  document.getElementById('form-branch-name').textContent = name;
  document.getElementById('f-profile').placeholder = tb(branch, 'profileExample') || t('ph_profile');
  document.getElementById('success-branch').textContent = name;

  // Accent color for form focus
  document.documentElement.style.setProperty('--focus-color', branch.color);
  document.documentElement.style.setProperty('--branch-accent', branch.color);
}

// ─── FORM LOGIC ───
function setLoading(on) {
  const btn     = document.getElementById('btn-submit');
  const txt     = document.getElementById('btn-text');
  const spinner = document.getElementById('spinner');
  const icon    = document.getElementById('btn-icon');

  btn.disabled          = on;
  txt.textContent       = t(on ? 'sending' : 'submit');
  spinner.style.display = on ? 'block' : 'none';
  icon.style.display    = on ? 'none'  : 'block';
}

function validate() {
  let ok = true;
  ['f-prenom', 'f-nom', 'f-messenger'].forEach(fid => {
    const el = document.getElementById(fid);
    if (!el.value.trim()) { el.classList.add('error'); ok = false; }
    else el.classList.remove('error');
  });

  const idEl = document.getElementById('f-student-id');
  if (!/^\d+$/.test(idEl.value.replace(/\s/g, ''))) {
    idEl.classList.add('error');
    ok = false;
  } else {
    idEl.classList.remove('error');
  }

  const emailEl = document.getElementById('f-email');
  if (!/^[^\s@]+@ieseg\.fr$/i.test(emailEl.value.trim())) {
    emailEl.classList.add('error');
    ok = false;
  } else {
    emailEl.classList.remove('error');
  }
  return ok;
}

// ─── ANIMATIONS ───
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Relance l'animation de secousse sur un élément
function shake(el) {
  el.classList.remove('shake');
  void el.offsetWidth; // force le navigateur à rejouer l'animation
  el.classList.add('shake');
}

// Petite explosion de confettis aux couleurs de la charte
function confetti(originEl) {
  if (reduceMotion) return;
  const r = originEl.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const colors = ['#b50000', '#a39171', '#306b34', '#f4f4f4', '#ffffff'];

  for (let i = 0; i < 36; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
    piece.style.background = colors[i % colors.length];
    document.body.appendChild(piece);

    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 120;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 60;
    piece.animate([
      { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: 0.6 },
      { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 160}px)) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], { duration: 1100 + Math.random() * 500, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)', fill: 'forwards' })
      .onfinish = () => piece.remove();
  }
}

function showSuccess() {
  document.getElementById('form-screen').style.display = 'none';
  const screen = document.getElementById('success-screen');
  screen.classList.add('active');
  document.getElementById('inscription').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  // Confettis quand le rond vert "pop" (après le défilement)
  setTimeout(() => confetti(screen.querySelector('.success-icon')), 450);
}

function showError(key) {
  const banner = document.getElementById('error-banner');
  const text = document.getElementById('error-banner-text');
  text.dataset.i18n = key; // reste le bon message si on change de langue
  text.textContent = t(key);
  banner.classList.remove('active');
  void banner.offsetWidth;
  banner.classList.add('active');
  shake(document.querySelector('.form-card'));
}

async function submitForm() {
  if (!validate()) {
    // Secoue la carte et amène le premier champ en erreur à l'écran
    shake(document.querySelector('.form-card'));
    const first = document.querySelector('.form-group .error');
    if (first) {
      first.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      first.focus({ preventScroll: true });
    }
    return;
  }

  document.getElementById('error-banner').classList.remove('active');
  setLoading(true);

  const payload = {
    branche:   branch.name,
    prenom:    document.getElementById('f-prenom').value.trim(),
    nom:       document.getElementById('f-nom').value.trim(),
    messenger: document.getElementById('f-messenger').value.trim(),
    numero_etudiant: document.getElementById('f-student-id').value.replace(/\s/g, ''),
    profil:    document.getElementById('f-profile').value.trim(),
    email:     document.getElementById('f-email').value.trim(),
    date:      new Date().toLocaleDateString('fr-FR'),
    heure:     new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  };

  // Envoi en text/plain (pas de pré-requête CORS) : le script Google renvoie { ok: true }
  // uniquement si la ligne a bien été ajoutée à la Sheet.
  let response;
  try {
    response = await fetch(APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
  } catch (err) {
    setLoading(false);
    showError('err_send'); // pas de réseau / script injoignable
    return;
  }

  const result = await response.json().catch(() => null);
  setLoading(false);

  if (response.ok && result && result.ok === true) {
    showSuccess();
  } else {
    console.error('Inscription refusée par le script :', result);
    showError('err_server');
  }
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  populatePage();
  document.getElementById('btn-submit').addEventListener('click', submitForm);

  // Clavier mobile : "Suivant" passe au champ suivant (dans la zone de texte, Entrée = retour à la ligne)
  const fields = ['f-prenom', 'f-nom', 'f-messenger', 'f-student-id', 'f-email', 'f-profile'].map(id => document.getElementById(id));
  fields.forEach((el, i) => {
    if (el.tagName === 'TEXTAREA') return;
    el.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      fields[i + 1].focus();
    });
  });

  // Compteur de caractères du champ "Parle-nous de toi"
  const profile = document.getElementById('f-profile');
  profile.addEventListener('input', () => {
    document.getElementById('profile-count').textContent = profile.value.length;
  });

  // Cache le bouton collant quand le formulaire est à l'écran
  const cta = document.getElementById('sticky-cta');
  new IntersectionObserver(([entry]) => {
    cta.classList.toggle('hidden', entry.isIntersecting);
  }, { threshold: 0.15 }).observe(document.getElementById('inscription'));
});

document.addEventListener('langchange', populatePage);
