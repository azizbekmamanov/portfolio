/* ===================================================================
   AZIZBEK MAMANOV — Work page (clickable cards → rich modal)
   Previews are stylised UI mockups (not real screenshots) — honest
   visual covers; the real thing is the linked repo.
   =================================================================== */

const PROJECTS = [
  {
    id: 'dmed', kind: 'dashboard', color: '#39ff8b', url: 'localhost:3000/dashboard',
    tag: 'FULL-STACK', stack: ['Express', 'React', 'SQLite', 'Node'],
    repo: 'https://github.com/azizbekmamanov/dmed',
    title: { uz: 'DMED — tibbiy yozuvlar tizimi', en: 'DMED — medical records system', ru: 'DMED — система медкарт' },
    desc: {
      uz: 'Bemor yozuvlari va rollar uchun full-stack ilova. Backend, frontend va ma\'lumotlar bazasi qanday bog\'lanishini amalda o\'rgangan o\'quv loyiham.',
      en: 'A full-stack app for patient records and roles. A learning project where I practiced how backend, frontend, and the database connect.',
      ru: 'Full-stack приложение для медкарт и ролей. Учебный проект, где я на практике понял связь backend, frontend и базы данных.',
    },
  },
  {
    id: 'kutubxona', kind: 'list', color: '#37e6ff', url: 'localhost:3000/books',
    tag: 'FULL-STACK', stack: ['Node', 'Express', 'Frontend', 'SQLite'],
    repo: 'https://github.com/azizbekmamanov/KUTUBXONA',
    title: { uz: 'KUTUBXONA — kutubxona tizimi', en: 'KUTUBXONA — library system', ru: 'KUTUBXONA — библиотечная система' },
    desc: {
      uz: 'Kitoblar, a\'zolar va ijaralarni boshqarish uchun backend + frontend tizimi. Ikki qism bir-biri bilan qanday ishlashini ko\'rsatadi.',
      en: 'A backend + frontend system to manage books, members, and loans — showing how the two work together.',
      ru: 'Backend + frontend система для книг, читателей и выдач — показывает их взаимодействие.',
    },
  },
  {
    id: 'pdp-davomat', kind: 'table', color: '#a080ff', url: '127.0.0.1:5000/davomat',
    tag: 'BACKEND · LMS', stack: ['Flask', 'Python', 'SQLite', 'RBAC'],
    repo: 'https://github.com/azizbekmamanov/pdp-davomat',
    title: { uz: 'pdp-davomat — davomat / LMS', en: 'pdp-davomat — attendance / LMS', ru: 'pdp-davomat — посещаемость / LMS' },
    desc: {
      uz: 'Flask\'da rollarga ega davomat tizimi (admin / o\'qituvchi / talaba). Rolga asoslangan kirish nazorati va backend mantig\'ini o\'rgandim.',
      en: 'A role-based attendance system in Flask (admin / teacher / student). I practiced role-based access control and backend logic.',
      ru: 'Система посещаемости с ролями на Flask (админ / преподаватель / студент). Практиковал ролевой доступ и backend-логику.',
    },
  },
  {
    id: 'userbot', kind: 'terminal', color: '#ff8a5c', url: '~/userbot $ python run.py',
    tag: 'AUTOMATION', stack: ['Python', 'Telegram API', 'AI'],
    repo: null,
    title: { uz: 'AI userbot — Telegram', en: 'AI userbot — Telegram', ru: 'AI userbot — Telegram' },
    desc: {
      uz: 'AI bilan ishlaydigan Telegram userbot — API va AI integratsiyasi qanday ishlashini o\'rgangan amaliy loyiha (faqat shaxsiy foydalanish).',
      en: 'An AI-powered Telegram userbot — a practical project where I learned how API and AI integration work (personal use only).',
      ru: 'Telegram userbot с ИИ — практический проект про интеграцию API и ИИ (только для личного использования).',
    },
  },
];

const I18N = {
  uz: { badge: 'TANLANGAN ISHLAR', title: 'ISHLAR', subtitle: "// o'quv va amaliy loyihalar — kartani bosing", footer: '© 2026 Azizbek Mamanov // ishlar',
        priv: 'maxfiy repo', open: 'ochish →', note: '// backend ilova — lokal ishga tushiriladi (repodagi README\'ga qarang)', noteUb: '// shaxsiy bot — repo maxfiy' },
  en: { badge: 'SELECTED WORK', title: 'WORK', subtitle: '// learning & practical projects — click a card', footer: '© 2026 Azizbek Mamanov // work',
        priv: 'private repo', open: 'open →', note: '// backend app — runs locally (see the repo README)', noteUb: '// personal bot — repo is private' },
  ru: { badge: 'ИЗБРАННЫЕ РАБОТЫ', title: 'РАБОТЫ', subtitle: '// учебные и практические проекты — нажмите карту', footer: '© 2026 Azizbek Mamanov // работы',
        priv: 'приватный репозиторий', open: 'открыть →', note: '// backend-приложение — запускается локально (см. README)', noteUb: '// личный бот — репозиторий приватный' },
};

let currentLang = localStorage.getItem('lang') || 'uz';
const sysTimeEl = document.getElementById('sysTime');
const langSwitchEl = document.getElementById('langSwitch');
const projectsEl = document.getElementById('projects');

/* ---------------- SVG MOCKUP PREVIEWS ---------------- */
const MONO = 'font-family="JetBrains Mono, monospace"';

function frame(inner, url, c) {
  return `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0a0c10"/><stop offset="1" stop-color="#06070a"/></linearGradient>
      <radialGradient id="gl" cx="0.5" cy="0" r="1">
        <stop offset="0" stop-color="${c}" stop-opacity="0.10"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bgg)"/>
    <rect width="800" height="450" fill="url(#gl)"/>
    <rect x="0" y="0" width="800" height="44" fill="#0d0f13"/>
    <line x1="0" y1="44" x2="800" y2="44" stroke="#1a212b"/>
    <circle cx="24" cy="22" r="5.5" fill="#ff5f56"/><circle cx="44" cy="22" r="5.5" fill="#ffbd2e"/><circle cx="64" cy="22" r="5.5" fill="#27c93f"/>
    <rect x="108" y="12" width="580" height="20" rx="10" fill="#13161c"/>
    <circle cx="124" cy="22" r="3" fill="${c}"/>
    <text x="138" y="26" ${MONO} font-size="11" fill="#5a6676">${url}</text>
    ${inner}
  </svg>`;
}

function svgDashboard(c, url) {
  let nav = '';
  for (let i = 0; i < 6; i++) nav += `<rect x="16" y="${78 + i * 38}" width="158" height="26" rx="6" fill="${i === 0 ? 'rgba(255,255,255,.06)' : 'transparent'}"/>
    <circle cx="32" cy="${91 + i * 38}" r="4.5" fill="${i === 0 ? c : '#2a3340'}"/>
    <rect x="46" y="${87 + i * 38}" width="${96 - i * 8}" height="7" rx="3.5" fill="#2a3340"/>`;
  let cards = '';
  const nums = ['42', '18', '7'];
  for (let i = 0; i < 3; i++) cards += `<rect x="${214 + i * 188}" y="74" width="168" height="92" rx="10" fill="#11141a" stroke="#202630"/>
    <rect x="232" y="92" width="64" height="7" rx="3.5" fill="#2a3340"/>
    <text x="232" y="148" ${MONO} font-size="30" fill="${c}">${nums[i]}</text>`;
  let rows = '';
  for (let i = 0; i < 4; i++) rows += `<rect x="214" y="${188 + i * 56}" width="544" height="44" rx="8" fill="#0e1116" stroke="#1a212b"/>
    <circle cx="240" cy="${210 + i * 56}" r="10" fill="#1a2330"/>
    <rect x="262" y="${205 + i * 56}" width="${150 + (i % 3) * 40}" height="8" rx="4" fill="#36414f"/>
    <rect x="262" y="${219 + i * 56}" width="${90 + (i % 2) * 30}" height="6" rx="3" fill="#222a35"/>
    <rect x="688" y="${204 + i * 56}" width="54" height="12" rx="6" fill="${c}" opacity="0.55"/>`;
  const inner = `<rect x="0" y="44" width="190" height="406" fill="#0a0c11"/><line x1="190" y1="44" x2="190" y2="450" stroke="#1a212b"/>
    <rect x="16" y="56" width="100" height="10" rx="5" fill="${c}"/>${nav}${cards}${rows}`;
  return frame(inner, url, c);
}

function svgList(c, url) {
  let rows = '';
  for (let i = 0; i < 6; i++) rows += `<rect x="40" y="${118 + i * 50}" width="720" height="40" rx="8" fill="#0e1116" stroke="#1a212b"/>
    <rect x="54" y="${128 + i * 50}" width="22" height="20" rx="3" fill="${c}" opacity="0.5"/>
    <rect x="92" y="${130 + i * 50}" width="${260 - (i % 3) * 40}" height="8" rx="4" fill="#36414f"/>
    <rect x="92" y="${144 + i * 50}" width="${120 + (i % 2) * 50}" height="6" rx="3" fill="#222a35"/>
    <rect x="640" y="${129 + i * 50}" width="100" height="18" rx="9" fill="${i % 3 === 0 ? 'rgba(57,255,139,.15)' : '#1a212b'}"/>`;
  const inner = `<rect x="40" y="66" width="180" height="18" rx="9" fill="#13161c"/>
    <text x="52" y="79" ${MONO} font-size="11" fill="${c}">books</text>
    <rect x="430" y="62" width="330" height="30" rx="8" fill="#11141a" stroke="#202630"/>
    <circle cx="450" cy="77" r="6" fill="none" stroke="#5a6676" stroke-width="2"/><line x1="455" y1="82" x2="461" y2="88" stroke="#5a6676" stroke-width="2"/>
    <rect x="470" y="73" width="120" height="7" rx="3.5" fill="#2a3340"/>${rows}`;
  return frame(inner, url, c);
}

function svgTable(c, url) {
  let head = '';
  const cols = [300, 400, 500, 600, 700];
  for (let i = 0; i < 5; i++) head += `<rect x="${cols[i] - 18}" y="78" width="30" height="7" rx="3.5" fill="#36414f"/>`;
  let rows = '';
  for (let r = 0; r < 5; r++) {
    rows += `<rect x="40" y="${104 + r * 56}" width="720" height="46" rx="8" fill="#0e1116" stroke="#1a212b"/>
      <circle cx="64" cy="${127 + r * 56}" r="11" fill="#1a2330"/>
      <rect x="86" y="${122 + r * 56}" width="150" height="9" rx="4.5" fill="#36414f"/>`;
    for (let cI = 0; cI < 5; cI++) {
      const present = (r + cI) % 4 !== 0;
      const cx = cols[cI], cy = 127 + r * 56;
      rows += present
        ? `<circle cx="${cx}" cy="${cy}" r="9" fill="rgba(57,255,139,.12)"/><path d="M${cx - 4} ${cy} l3 3 l5 -6" stroke="${c}" stroke-width="2" fill="none"/>`
        : `<circle cx="${cx}" cy="${cy}" r="9" fill="rgba(255,85,102,.12)"/><path d="M${cx - 3} ${cy - 3} l6 6 M${cx + 3} ${cy - 3} l-6 6" stroke="#ff5566" stroke-width="2"/>`;
    }
  }
  const inner = `<rect x="40" y="62" width="200" height="20" rx="6" fill="#13161c"/>
    <text x="52" y="76" ${MONO} font-size="11" fill="${c}">davomat // guruh A</text>${head}${rows}`;
  return frame(inner, url, c);
}

function svgTerminal(c, url) {
  const lines = [
    ['$ python run.py', '#5a6676'],
    ['[ok] session loaded', c],
    ['[ok] handlers registered: 12', '#cdd6f4'],
    ['> .ai explain this code', '#37e6ff'],
    ['  thinking…  ▍', '#cdd6f4'],
    ['[ai] reply sent ✓', c],
    ['> .ping', '#37e6ff'],
    ['  pong — 41ms', '#cdd6f4'],
  ];
  let body = '';
  lines.forEach((l, i) => { body += `<text x="40" y="${100 + i * 34}" ${MONO} font-size="15" fill="${l[1]}">${l[0]}</text>`; });
  const inner = `<rect x="20" y="60" width="760" height="372" rx="10" fill="#070809" stroke="#1a212b"/>${body}
    <rect x="40" y="${100 + lines.length * 34 - 12}" width="9" height="16" fill="${c}"/>`;
  return frame(inner, url, c);
}

function previewSVG(p) {
  if (p.kind === 'dashboard') return svgDashboard(p.color, p.url);
  if (p.kind === 'list') return svgList(p.color, p.url);
  if (p.kind === 'table') return svgTable(p.color, p.url);
  return svgTerminal(p.color, p.url);
}

/* ---------------- RENDER CARDS ---------------- */
function render() {
  const t = I18N[currentLang];
  projectsEl.innerHTML = PROJECTS.map((p, i) => `
    <button class="wcard" data-i="${i}" aria-label="${p.title[currentLang]}">
      <div class="wcard__thumb">${previewSVG(p)}<span class="wcard__open">${t.open}</span></div>
      <div class="wcard__meta">
        <span class="proj-tag">${p.tag}</span>
        <h3>${p.title[currentLang]}</h3>
      </div>
    </button>`).join('');
}

/* ---------------- MODAL ---------------- */
const modal = document.getElementById('wmodal');
const wmName = document.getElementById('wmName');
const wmPreview = document.getElementById('wmPreview');
const wmTag = document.getElementById('wmTag');
const wmTitle = document.getElementById('wmTitle');
const wmDesc = document.getElementById('wmDesc');
const wmStack = document.getElementById('wmStack');
const wmLinks = document.getElementById('wmLinks');

function openModal(p) {
  const t = I18N[currentLang];
  wmName.textContent = p.id + (p.kind === 'terminal' ? '' : '.app');
  wmPreview.innerHTML = previewSVG(p);
  wmTag.textContent = p.tag;
  wmTitle.textContent = p.title[currentLang];
  wmDesc.textContent = p.desc[currentLang];
  wmStack.innerHTML = p.stack.map((s) => `<li>${s}</li>`).join('');
  wmLinks.innerHTML = `<div style="width:100%" class="wmodal__note">${p.repo ? t.note : t.noteUb}</div>` +
    (p.repo
      ? `<a class="proj-repo" href="${p.repo}" target="_blank" rel="noopener noreferrer"># repo: ${p.repo.replace('https://', '')}</a>`
      : `<span class="proj-repo private"># ${t.priv}</span>`);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

projectsEl.addEventListener('click', (e) => {
  const card = e.target.closest('.wcard');
  if (card) openModal(PROJECTS[+card.dataset.i]);
});
modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

/* ---------------- CLOCK / GLITCH / I18N ---------------- */
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
  document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  render();
  if (modal.classList.contains('open')) closeModal();
}

langSwitchEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) { applyLanguage(btn.dataset.lang); triggerGlitch(); }
});
document.querySelector('.btn-back')?.addEventListener('click', triggerGlitch);

applyLanguage(currentLang);
