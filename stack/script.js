/* ===================================================================
   AZIZBEK MAMANOV — Stack page
   =================================================================== */

const COLS = {
  uz: [
    { h: '// xavfsizlik (o\'rganmoqda)', items: ['Veb-xavfsizlik asoslari', 'XSS amaliyoti (DVWA lab)', 'HTTP · DevTools', 'Linux', 'Qiziquvchan & o\'rganmoqda'] },
    { h: '// injiniring', items: ['Python · Flask / FastAPI', 'Node · Express', 'Next.js · React', 'SQLite · PostgreSQL', 'HTML · CSS · JS'] },
    { h: '// tizimlar', items: ['Linux', 'ESP32 · MicroPython', 'Docker (lab)', 'Deploy · cPanel / Pages', 'Git'] },
  ],
  en: [
    { h: '// security (learning)', items: ['Web-security basics', 'XSS practice (DVWA lab)', 'HTTP · DevTools', 'Linux', 'Curious & learning'] },
    { h: '// engineering', items: ['Python · Flask / FastAPI', 'Node · Express', 'Next.js · React', 'SQLite · PostgreSQL', 'HTML · CSS · JS'] },
    { h: '// systems', items: ['Linux', 'ESP32 · MicroPython', 'Docker (lab)', 'Deploy · cPanel / Pages', 'Git'] },
  ],
  ru: [
    { h: '// безопасность (изучаю)', items: ['Основы веб-безопасности', 'Практика XSS (DVWA lab)', 'HTTP · DevTools', 'Linux', 'Любопытство & учёба'] },
    { h: '// инженерия', items: ['Python · Flask / FastAPI', 'Node · Express', 'Next.js · React', 'SQLite · PostgreSQL', 'HTML · CSS · JS'] },
    { h: '// системы', items: ['Linux', 'ESP32 · MicroPython', 'Docker (lab)', 'Deploy · cPanel / Pages', 'Git'] },
  ],
};

const I18N = {
  uz: { badge: 'STEK VA ARSENAL', title: 'STEK', subtitle: '// texnologiyalar va vositalar', footer: '© 2026 Azizbek Mamanov // stek' },
  en: { badge: 'STACK & ARSENAL', title: 'STACK', subtitle: '// technologies & tools', footer: '© 2026 Azizbek Mamanov // stack' },
  ru: { badge: 'СТЕК И АРСЕНАЛ', title: 'СТЕК', subtitle: '// технологии и инструменты', footer: '© 2026 Azizbek Mamanov // стек' },
};

let currentLang = localStorage.getItem('lang') || 'uz';
const sysTimeEl = document.getElementById('sysTime');
const langSwitchEl = document.getElementById('langSwitch');
const gridEl = document.getElementById('stackGrid');

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

function render() {
  gridEl.innerHTML = COLS[currentLang].map((c) => `
    <div class="stack-col">
      <h3>${c.h}</h3>
      <ul>${c.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
}

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
  render();
}

langSwitchEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) { applyLanguage(btn.dataset.lang); triggerGlitch(); }
});
document.querySelector('.btn-back')?.addEventListener('click', triggerGlitch);

applyLanguage(currentLang);
