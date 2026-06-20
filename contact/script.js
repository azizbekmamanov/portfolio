/* ===================================================================
   AZIZBEK MAMANOV — Contact page
   =================================================================== */

const I18N = {
  uz: {
    badge: 'ALOQA',
    title: 'ALOQA',
    subtitle: "// keling, bog'lanamiz",
    'ch.title': '01. ALOQA KANALLARI',
    lead: "Loyiha, hamkorlik yoki shunchaki salom — istalgan kanal orqali yozing. Tezda javob beraman.",
    cta: 'Email yuborish →',
    footer: '© 2026 Azizbek Mamanov // aloqa',
  },
  en: {
    badge: 'CONTACT',
    title: 'CONTACT',
    subtitle: "// let's get in touch",
    'ch.title': '01. CONTACT CHANNELS',
    lead: 'A project, a collaboration, or just a hi — reach out on any channel. I reply fast.',
    cta: 'Send an email →',
    footer: '© 2026 Azizbek Mamanov // contact',
  },
  ru: {
    badge: 'КОНТАКТ',
    title: 'КОНТАКТ',
    subtitle: '// давайте свяжемся',
    'ch.title': '01. КАНАЛЫ СВЯЗИ',
    lead: 'Проект, сотрудничество или просто привет — пишите в любой канал. Отвечаю быстро.',
    cta: 'Написать на email →',
    footer: '© 2026 Azizbek Mamanov // контакт',
  },
};

let currentLang = localStorage.getItem('lang') || 'uz';
const sysTimeEl = document.getElementById('sysTime');
const langSwitchEl = document.getElementById('langSwitch');

function triggerGlitch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('is-glitching');
  setTimeout(() => document.body.classList.remove('is-glitching'), 200);
}

function updateClock() {
  const n = new Date();
  const p = (x) => String(x).padStart(2, '0');
  sysTimeEl.textContent = `SYS_TIME: ${n.getFullYear()}.${p(n.getMonth() + 1)}.${p(n.getDate())} ${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
}
setInterval(updateClock, 1000);
updateClock();

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll('.lang-btn').forEach((b) =>
    b.classList.toggle('active', b.dataset.lang === lang));
}

langSwitchEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) { applyLanguage(btn.dataset.lang); triggerGlitch(); }
});
document.querySelector('.btn-back')?.addEventListener('click', triggerGlitch);

applyLanguage(currentLang);
