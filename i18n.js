// ─────────────────────────────────────────────
// TRADUCTION FR / EN
// Textes fixes : attributs data-i18n (texte), data-i18n-html (HTML),
// data-i18n-placeholder, data-i18n-aria. Textes des branches : champ `en`
// dans branches-data.js.
// ─────────────────────────────────────────────
const I18N = {
  fr: {
    title_home:      'BDA IESEG — Inscriptions',
    hero_title:      'Inscriptions<br><em>BDA IESEG</em>',
    hero_text:       "Rejoins une branche artistique, exprime ton talent et fais partie de l'aventure culturelle de l'IESEG.",
    hero_cta:        'Découvrir les branches',
    learn_more:      'En savoir plus',
    footer:          "Bureau des Arts · IESEG School of Management · Les inscriptions sont transmises à l'équipe BDA",

    menu_open:       'Ouvrir le menu',
    menu_close:      'Fermer le menu',
    menu_home:       'Accueil',
    menu_branches:   'Les branches',
    menu_lang:       'Langue',

    all_branches:    'Toutes les branches',
    about:           'À propos',
    what_we_do:      "Ce qu'on fait",
    signup:          'Inscription',
    form_title:      'Rejoindre la <span id="form-branch-name"></span>',
    form_sub:        "Remplis ce formulaire et l'équipe BDA te contactera sur Messenger.",
    first_name:      'Prénom',
    last_name:       'Nom',
    messenger:       'Nom Messenger',
    email:           'Email IESEG',
    student_id:      'Numéro étudiant',
    ph_student_id:   'Ex. 123456',
    student_id_invalid: 'Numéro étudiant requis (chiffres uniquement)',
    profile:         'Parle-nous de toi',
    optional:        '(facultatif)',
    profile_hint:    "Ton profil, ce qui t'attire dans la branche, ton expérience… Aucune expérience n'est requise : les débutant·e·s sont les bienvenu·e·s, on est là pour apprendre ensemble !",
    ph_profile:      "Ex. : « Je n'ai jamais essayé mais j'ai trop envie d'apprendre » ou « Je joue de la guitare depuis 5 ans »",
    ph_first_name:   'Ton prénom',
    ph_last_name:    'Ton nom de famille',
    ph_messenger:    'Ton nom sur Messenger',
    ph_email:        'prenom.nom@ieseg.fr',
    required:        'Ce champ est requis',
    email_required:  'Adresse @ieseg.fr requise',
    err_generic:     'Une erreur est survenue. Réessaie dans quelques instants.',
    err_send:        "Impossible d'envoyer l'inscription. Vérifie ta connexion et réessaie.",
    err_server:      "Ton inscription n'a pas pu être enregistrée. Réessaie dans un instant, ou contacte l'équipe BDA sur Messenger.",
    submit:          "S'inscrire à la branche",
    sending:         'Envoi...',
    success_title:   'Inscription confirmée !',
    success_text:    'Tu es bien inscrit·e à la <strong id="success-branch"></strong>.<br>L\'équipe BDA te contactera bientôt sur Messenger.',
    see_others:      'Voir les autres branches',
  },

  en: {
    title_home:      'BDA IESEG — Sign-ups',
    hero_title:      'Sign-ups<br><em>BDA IESEG</em>',
    hero_text:       "Join an arts branch, express your talent and be part of IESEG's cultural adventure.",
    hero_cta:        'Discover the branches',
    learn_more:      'Learn more',
    footer:          'Bureau des Arts · IESEG School of Management · Sign-ups are sent to the BDA team',

    menu_open:       'Open menu',
    menu_close:      'Close menu',
    menu_home:       'Home',
    menu_branches:   'Branches',
    menu_lang:       'Language',

    all_branches:    'All branches',
    about:           'About',
    what_we_do:      'What we do',
    signup:          'Sign up',
    form_title:      'Join the <span id="form-branch-name"></span>',
    form_sub:        'Fill in this form and the BDA team will contact you on Messenger.',
    first_name:      'First name',
    last_name:       'Last name',
    messenger:       'Messenger name',
    email:           'IESEG email',
    student_id:      'Student ID',
    ph_student_id:   'e.g. 123456',
    student_id_invalid: 'Student ID required (numbers only)',
    profile:         'Tell us about yourself',
    optional:        '(optional)',
    profile_hint:    "Your profile, what draws you to this branch, any experience… No experience needed: beginners are more than welcome, we're here to learn together!",
    ph_profile:      'e.g. “I’ve never tried it but I really want to learn” or “I’ve been playing guitar for 5 years”',
    ph_first_name:   'Your first name',
    ph_last_name:    'Your last name',
    ph_messenger:    'Your name on Messenger',
    ph_email:        'firstname.lastname@ieseg.fr',
    required:        'This field is required',
    email_required:  'An @ieseg.fr address is required',
    err_generic:     'Something went wrong. Please try again in a moment.',
    err_send:        "Couldn't send your sign-up. Check your connection and try again.",
    err_server:      "Your sign-up couldn't be saved. Please try again in a moment, or contact the BDA team on Messenger.",
    submit:          'Join the branch',
    sending:         'Sending...',
    success_title:   "You're signed up!",
    success_text:    "You've joined the <strong id=\"success-branch\"></strong>.<br>The BDA team will contact you on Messenger soon.",
    see_others:      'See the other branches',
  },
};

// Langue : choix mémorisé, sinon langue du navigateur (français → FR, sinon EN)
let LANG = (() => {
  try {
    const saved = localStorage.getItem('aql-lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch (e) {}
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
})();

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) || I18N.fr[key] || key;
}

// Champ traduit d'une branche (name, short, tagline, desc, description, collab)
function tb(branch, field) {
  if (LANG === 'en' && branch.en && branch.en[field] != null) return branch.en[field];
  if (field === 'short') return branch.name.replace(/^Branche /, '');
  return branch[field];
}

// Libellé traduit de la i-ème activité d'une branche
function tActivity(branch, i) {
  const en = LANG === 'en' && branch.en && branch.en.activities;
  return (en && en[i]) || branch.activities[i].label;
}

function applyStatic() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  const titleKey = document.documentElement.dataset.i18nTitle;
  if (titleKey) document.title = t(titleKey);
}

function setLang(lang) {
  if (lang === LANG) return;
  LANG = lang;
  try { localStorage.setItem('aql-lang', lang); } catch (e) {}
  applyStatic();
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.addEventListener('DOMContentLoaded', applyStatic);
