/* ===================================================================
   AZIZBEK MAMANOV — Work page
   =================================================================== */

const PROJECTS = [
  {
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
  uz: { badge: 'TANLANGAN ISHLAR', title: 'ISHLAR', subtitle: "// o'quv va amaliy loyihalar", footer: '© 2026 Azizbek Mamanov // ishlar', priv: 'maxfiy repo' },
  en: { badge: 'SELECTED WORK', title: 'WORK', subtitle: '// learning & practical projects', footer: '© 2026 Azizbek Mamanov // work', priv: 'private repo' },
  ru: { badge: 'ИЗБРАННЫЕ РАБОТЫ', title: 'РАБОТЫ', subtitle: '// учебные и практические проекты', footer: '© 2026 Azizbek Mamanov // работы', priv: 'приватный репозиторий' },
};

let currentLang = localStorage.getItem('lang') || 'uz';
const sysTimeEl = document.getElementById('sysTime');
const langSwitchEl = document.getElementById('langSwitch');
const projectsEl = document.getElementById('projects');

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
  const t = I18N[currentLang];
  projectsEl.innerHTML = PROJECTS.map((p, i) => `
    <section class="panel reveal">
      <div class="panel-header">
        <span class="panel-dot"></span>
        <h2 class="panel-title">${String(i + 1).padStart(2, '0')}. ${p.title[currentLang]}</h2>
      </div>
      <div class="panel-body">
        <span class="proj-tag">${p.tag}</span>
        <p class="proj-desc">${p.desc[currentLang]}</p>
        <ul class="proj-stack">${p.stack.map((s) => `<li>${s}</li>`).join('')}</ul>
        ${p.repo
          ? `<a class="proj-repo" href="${p.repo}" target="_blank" rel="noopener noreferrer"># repo: ${p.repo.replace('https://', '')}</a>`
          : `<span class="proj-repo private"># ${t.priv}</span>`}
      </div>
    </section>`).join('');
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
