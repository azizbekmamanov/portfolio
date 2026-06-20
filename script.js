/* ===================================================================
   AZIZBEK MAMANOV — portfolio interactions + i18n (UZ / EN / RU)
   =================================================================== */

/* ============ UI TRANSLATIONS ============ */
const I18N = {
  uz: {
    'nav.work': 'ishlar', 'nav.about': 'men haqimda', 'nav.stack': 'stek', 'nav.contact': 'aloqa',
    'hero.status': 'ish uchun ochiqman — 2026',
    'hero.desc': "Men jarayonni tushunishni yaxshi ko'raman, keyin buzilmaydigan narsa quraman. Full-stack o'rganaman, zerikarli ishlarni skript bilan avtomatlashtiraman va veb-xavfsizlikni qonuniy lab'da mashq qilaman.",
    'hero.btnWork': 'tanlangan ishlar →', 'hero.btnContact': "bog'lanish", 'hero.now': 'hozir',
    'stat.s1': "o'quv loyihasi qurilgan", 'stat.s2': 'dasturlash tili',
    'stat.s3': 'oylik Python kursi (0 dan)', 'stat.s4': 'yildan beri PDP talabasi',
    'sec.work': 'Tanlangan ishlar', 'sec.workSub': '// case-fayllar — ochish uchun bosing',
    'sec.about': 'Men haqimda', 'sec.stack': 'Stek va arsenal',
    'contact.title': "Keling, buzilmaydigan<br/>narsa quramiz.",
    'footer.sig': "shablonsiz — qo'lda yozilgan",
    'about.lead': "Men avval <em>jarayonni tushunaman</em>, keyin quraman.",
    'about.p1': "18 yoshli talaba dasturchiman. 2023-yilda Python kursi bilan boshlaganman, hozir PDP Universitetida (grant) full-stack o'rganaman va MFY uchun avtomatlashtirish skriptlari yozaman.",
    'about.p2': "O'zbekistonda 🇺🇿 · Python, JavaScript va full-stack bilan ishlayman. Kelajakda — software development (Java).",
    'about.dossier': "to'liq dossierni ochish →",
    'stack.security': '// xavfsizlik (o\'rganmoqda)', 'stack.engineering': '// injiniring', 'stack.systems': '// tizimlar',
    'stack.re': 'Veb-xavfsizlik asoslari', 'stack.ir': 'XSS amaliyoti (DVWA lab)', 'stack.malware': 'Qiziquvchan & o\'rganmoqda',
    'stack.ml': 'Docker (lab)', 'stack.deploy': 'Deploy · cPanel / Vercel',
    'modal.problem': '▸ muammo', 'modal.approach': '▸ yondashuv', 'modal.outcome': '▸ natija',
  },
  en: {
    'nav.work': 'work', 'nav.about': 'about', 'nav.stack': 'stack', 'nav.contact': 'contact',
    'hero.status': 'available for work — 2026',
    'hero.desc': "I like understanding how things work, then building something that doesn't break. I'm learning full-stack, I automate boring tasks with scripts, and I practice web security in a legal lab.",
    'hero.btnWork': 'view selected work →', 'hero.btnContact': 'get in touch', 'hero.now': 'currently',
    'stat.s1': 'projects built', 'stat.s2': 'programming languages',
    'stat.s3': 'month Python course (from zero)', 'stat.s4': 'at PDP University since',
    'sec.work': 'Selected Work', 'sec.workSub': '// case files — click to open',
    'sec.about': 'About', 'sec.stack': 'Stack & Arsenal',
    'contact.title': "Let's build something<br/>that doesn't break.",
    'footer.sig': 'designed & coded — no templates',
    'about.lead': 'I <em>understand the process first</em>, then build.',
    'about.p1': "I'm an 18-year-old student developer. I started with a Python course in 2023, and now I'm learning full-stack at PDP University (on a grant) and writing automation scripts for a local office.",
    'about.p2': 'Based in Uzbekistan 🇺🇿 · working in Python, JavaScript, and full-stack. Next up: software development with Java.',
    'about.dossier': 'open full dossier →',
    'stack.security': '// security (learning)', 'stack.engineering': '// engineering', 'stack.systems': '// systems',
    'stack.re': 'Web-security basics', 'stack.ir': 'XSS practice (DVWA lab)', 'stack.malware': 'Curious & learning',
    'stack.ml': 'Docker (lab)', 'stack.deploy': 'Deploy · cPanel / Vercel',
    'modal.problem': '▸ the problem', 'modal.approach': '▸ approach', 'modal.outcome': '▸ outcome',
  },
  ru: {
    'nav.work': 'работы', 'nav.about': 'обо мне', 'nav.stack': 'стек', 'nav.contact': 'контакт',
    'hero.status': 'открыт для работы — 2026',
    'hero.desc': "Мне нравится понимать, как всё устроено, а потом строить то, что не ломается. Изучаю full-stack, автоматизирую рутину скриптами и практикую веб-безопасность в легальной лаборатории.",
    'hero.btnWork': 'избранные работы →', 'hero.btnContact': 'связаться', 'hero.now': 'сейчас',
    'stat.s1': 'учебных проектов', 'stat.s2': 'языка программирования',
    'stat.s3': 'мес. курс Python (с нуля)', 'stat.s4': 'в PDP University с',
    'sec.work': 'Избранные работы', 'sec.workSub': '// досье — нажмите, чтобы открыть',
    'sec.about': 'Обо мне', 'sec.stack': 'Стек и арсенал',
    'contact.title': "Давайте создадим то,<br/>что не ломается.",
    'footer.sig': 'без шаблонов — написано вручную',
    'about.lead': 'Я <em>сначала понимаю процесс</em>, потом строю.',
    'about.p1': 'Я 18-летний студент-разработчик. Начал с курса Python в 2023, сейчас изучаю full-stack в PDP University (на гранте) и пишу скрипты автоматизации для местного офиса.',
    'about.p2': 'Нахожусь в Узбекистане 🇺🇿 · работаю с Python, JavaScript и full-stack. Дальше — разработка ПО на Java.',
    'about.dossier': 'открыть полное досье →',
    'stack.security': '// безопасность (изучаю)', 'stack.engineering': '// инженерия', 'stack.systems': '// системы',
    'stack.re': 'Основы веб-безопасности', 'stack.ir': 'Практика XSS (DVWA lab)', 'stack.malware': 'Любопытство & учёба',
    'stack.ml': 'Docker (lab)', 'stack.deploy': 'Деплой · cPanel / Vercel',
    'modal.problem': '▸ проблема', 'modal.approach': '▸ подход', 'modal.outcome': '▸ результат',
  },
};

/* ============ ROLES + NOW (per language) ============ */
const ROLES = {
  uz: ['talaba dasturchi', "full-stack o'rganuvchi", 'avtomatlashtirish ishqibozi', 'veb-xavfsizlik havaskori'],
  en: ['student developer', 'full-stack learner', 'automation tinkerer', 'web-security hobbyist'],
  ru: ['студент-разработчик', 'изучаю full-stack', 'энтузиаст автоматизации', 'любитель веб-безопасности'],
};
const NOW = {
  uz: ['full-stack yo\'nalishini o\'rganyapman', 'MFY uchun avtomatlashtirish skripti yozyapman', 'DVWA lab\'da veb-xavfsizlikni mashq qilyapman', 'o\'z portfoliomni ortiqcha murakkablashtiryapman'],
  en: ['learning full-stack development', 'writing an automation script', 'practicing web security in a DVWA lab', 'over-engineering my own portfolio'],
  ru: ['изучаю full-stack разработку', 'пишу скрипт автоматизации', 'практикую веб-безопасность в DVWA lab', 'переусложняю собственное портфолио'],
};

/* ============ CASE DATA (shared + per-language) ============ */
const CASES = [
  {
    id: 'CASE-001', tagClass: 'tag--green', stack: ['Express', 'React', 'SQLite', 'Node'], repo: 'https://github.com/azizbekmamanov/dmed',
    i18n: {
      uz: { tag: 'FULL-STACK', title: 'DMED — tibbiy yozuvlar tizimi',
        short: 'Bemor yozuvlari va rollar uchun full-stack ilova (Express + React + SQLite) — o\'quv loyihasi.',
        problem: 'Bemorlar, tashxislar va turli foydalanuvchi rollarini bitta tizimda, ma\'lumotlar tartibli va rollarga ajratilgan holda boshqarish.',
        steps: ['Express + SQLite\'da backend API qurdim', 'React\'da rollarga mos interfeys yasadim', 'Foydalanuvchi autentifikatsiyasi va rollarni qo\'shdim', 'AI yordamida o\'rganib, har bosqichda nima bo\'layotganini tushunishga harakat qildim'],
        outcome: 'Ishlaydigan full-stack o\'quv loyihasi — backend, frontend va ma\'lumotlar bazasi qanday bog\'lanishini amalda o\'rgandim.' },
      en: { tag: 'FULL-STACK', title: 'DMED — medical records system',
        short: 'A full-stack app for patient records and roles (Express + React + SQLite) — a learning project.',
        problem: 'Manage patients, diagnoses, and different user roles in one system, with data kept organized and separated by role.',
        steps: ['Built a backend API with Express + SQLite', 'Created a role-aware UI in React', 'Added user authentication and roles', 'Learned with AI help, focusing on understanding each step'],
        outcome: 'A working full-stack learning project — I learned hands-on how backend, frontend, and the database connect.' },
      ru: { tag: 'FULL-STACK', title: 'DMED — система медкарт',
        short: 'Full-stack приложение для медкарт и ролей (Express + React + SQLite) — учебный проект.',
        problem: 'Управлять пациентами, диагнозами и разными ролями пользователей в одной системе, с разделением данных по ролям.',
        steps: ['Создал backend API на Express + SQLite', 'Сделал интерфейс с учётом ролей на React', 'Добавил аутентификацию и роли', 'Учился с помощью ИИ, стараясь понимать каждый шаг'],
        outcome: 'Рабочий full-stack учебный проект — на практике понял, как связаны backend, frontend и база данных.' },
    },
  },
  {
    id: 'CASE-002', tagClass: 'tag--cyan', stack: ['Node', 'Express', 'Frontend', 'SQLite'], repo: 'https://github.com/azizbekmamanov/KUTUBXONA',
    i18n: {
      uz: { tag: 'FULL-STACK', title: 'KUTUBXONA — kutubxona tizimi',
        short: 'Kitoblar, a\'zolar va ijaralarni boshqarish uchun backend + frontend tizimi.',
        problem: 'Kutubxonani raqamlashtirish: kitoblar, a\'zolar va kitob berish/qaytarish jarayonini bitta joyda boshqarish.',
        steps: ['Backend va frontendni alohida qurdim (Node)', 'Kitob va a\'zo boshqaruvi uchun CRUD qo\'shdim', 'Ijaraga olish / qaytarish mantig\'ini yozdim', 'Loyiha tuzilmasini toza saqlashga harakat qildim'],
        outcome: 'Backend va frontend bir-biri bilan qanday ishlashini ko\'rsatadigan to\'liq o\'quv loyihasi.' },
      en: { tag: 'FULL-STACK', title: 'KUTUBXONA — library system',
        short: 'A backend + frontend system to manage books, members, and loans.',
        problem: 'Digitize a library: books, members, and the borrow/return workflow in one place.',
        steps: ['Built separate backend and frontend (Node)', 'Added CRUD for books and members', 'Wrote the borrow/return logic', 'Tried to keep the project structure clean'],
        outcome: 'A complete learning project showing how backend and frontend work together.' },
      ru: { tag: 'FULL-STACK', title: 'KUTUBXONA — библиотечная система',
        short: 'Backend + frontend система для книг, читателей и выдач.',
        problem: 'Оцифровать библиотеку: книги, читатели и процесс выдачи/возврата в одном месте.',
        steps: ['Построил отдельные backend и frontend (Node)', 'Добавил CRUD для книг и читателей', 'Написал логику выдачи/возврата', 'Старался держать структуру проекта чистой'],
        outcome: 'Завершённый учебный проект, показывающий взаимодействие backend и frontend.' },
    },
  },
  {
    id: 'CASE-003', tagClass: 'tag--violet', stack: ['Flask', 'Python', 'SQLite', 'RBAC'], repo: 'https://github.com/azizbekmamanov/pdp-davomat',
    i18n: {
      uz: { tag: 'BACKEND · LMS', title: 'pdp-davomat — davomat / LMS',
        short: 'Flask\'da davomat va o\'quv jarayonini boshqarish uchun rollarga ega tizim (admin / o\'qituvchi / talaba).',
        problem: 'Davomat va kurslarni boshqarish, har bir rol uchun alohida ko\'rinish bilan.',
        steps: ['Flask + SQLite\'da backend qurdim', 'Admin / o\'qituvchi / talaba rollarini ajratdim', 'Autentifikatsiyani xavfsiz qilishga e\'tibor berdim', 'Davomat va kurs mantig\'ini yozdim'],
        outcome: 'Rollarga asoslangan kirish nazorati va backend mantig\'ini o\'rgangan o\'quv loyiham.' },
      en: { tag: 'BACKEND · LMS', title: 'pdp-davomat — attendance / LMS',
        short: 'A role-based attendance & learning system in Flask (admin / teacher / student).',
        problem: 'Manage attendance and courses, with a separate view for each role.',
        steps: ['Built the backend in Flask + SQLite', 'Separated admin / teacher / student roles', 'Focused on making auth secure', 'Wrote the attendance and course logic'],
        outcome: 'A learning project where I practiced role-based access control and backend logic.' },
      ru: { tag: 'BACKEND · LMS', title: 'pdp-davomat — посещаемость / LMS',
        short: 'Система посещаемости и обучения с ролями на Flask (админ / преподаватель / студент).',
        problem: 'Управлять посещаемостью и курсами с отдельным видом для каждой роли.',
        steps: ['Построил backend на Flask + SQLite', 'Разделил роли админ / преподаватель / студент', 'Уделил внимание безопасности аутентификации', 'Написал логику посещаемости и курсов'],
        outcome: 'Учебный проект, где я практиковал ролевой доступ и backend-логику.' },
    },
  },
  {
    id: 'CASE-004', tagClass: 'tag--red', stack: ['Python', 'Telegram API', 'AI', 'Automation'],
    i18n: {
      uz: { tag: 'AVTOMATLASHTIRISH', title: 'AI userbot — Telegram',
        short: 'AI bilan ishlaydigan Telegram userbot — xabarlarga javob berish va vazifalarni avtomatlashtirish uchun (shaxsiy foydalanish).',
        problem: 'Telegram\'dagi takroriy vazifalar va javoblarni AI bilan bog\'lab avtomatlashtirish.',
        steps: ['Telegram API bilan userbot mantig\'ini qurdim', 'AI modelini xabarlarga javob berishga uladim', 'Buyruqlar va avtomatik amallarni qo\'shdim', 'Faqat xavfsiz, shaxsiy foydalanishga moslab sozladim'],
        outcome: 'API va AI integratsiyasi qanday ishlashini o\'rgangan amaliy loyiha (faqat shaxsiy foydalanish uchun).' },
      en: { tag: 'AUTOMATION', title: 'AI userbot — Telegram',
        short: 'An AI-powered Telegram userbot for replying to messages and automating tasks (personal use).',
        problem: 'Automate repetitive Telegram tasks and replies, wired up to an AI model.',
        steps: ['Built the userbot logic on the Telegram API', 'Connected an AI model to handle replies', 'Added commands and automated actions', 'Kept it for safe, personal use only'],
        outcome: 'A practical project where I learned how API and AI integration work (personal use only).' },
      ru: { tag: 'AUTOMATION', title: 'AI userbot — Telegram',
        short: 'Telegram userbot с ИИ для ответов на сообщения и автоматизации задач (личное использование).',
        problem: 'Автоматизировать рутинные задачи и ответы в Telegram, подключив ИИ-модель.',
        steps: ['Построил логику userbot на Telegram API', 'Подключил ИИ-модель для ответов', 'Добавил команды и автоматические действия', 'Оставил только для безопасного личного использования'],
        outcome: 'Практический проект, где я понял, как работает интеграция API и ИИ (только для личного использования).' },
    },
  },
];

/* ============ LANGUAGE STATE ============ */
let lang = localStorage.getItem('lang') || 'uz';
let roles = ROLES[lang];
let nowItems = NOW[lang];
let currentCases = [];

const casesEl = document.getElementById('cases');

function buildCases() {
  currentCases = CASES.map((c) => ({ id: c.id, tagClass: c.tagClass, stack: c.stack, repo: c.repo, ...c.i18n[lang] }));
  casesEl.innerHTML = currentCases.map((c, i) => `
    <article class="case reveal in" data-i="${i}" data-cursor-case>
      <div class="case__meta">
        <span class="case__tag ${c.tagClass}">${c.tag}</span>
        <span class="case__id">${c.id}</span>
      </div>
      <h3 class="case__title">${c.title}</h3>
      <p class="case__desc">${c.short}</p>
      <ul class="case__stack">${c.stack.slice(0, 4).map(s => `<li>${s}</li>`).join('')}</ul>
    </article>`).join('');
}

function applyLang(next) {
  lang = next;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  // active button
  document.querySelectorAll('.lang__btn').forEach((b) =>
    b.classList.toggle('active', b.dataset.lang === lang));

  // dynamic content
  roles = ROLES[lang]; nowItems = NOW[lang];
  r = 0; c = 0; deleting = false;           // restart typed loop cleanly
  n = 0; nowText.textContent = nowItems[0];
  buildCases();
  if (modal.classList.contains('open')) closeCase();
}

document.getElementById('lang').addEventListener('click', (e) => {
  const btn = e.target.closest('.lang__btn');
  if (btn) { applyLang(btn.dataset.lang); beep(620); }
});

/* ============ mobile burger menu ============ */
const burger = document.getElementById('burger');
const navBar = document.querySelector('.nav');
burger.addEventListener('click', () => {
  const open = navBar.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
  beep(620);
});
// close after picking a link (but keep open when switching language)
document.getElementById('navLinks').addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    navBar.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    triggerGlitch();
  }
});

/* ============ MODAL (terminal style) ============ */
const modal = document.getElementById('modal');
const mTerm = document.getElementById('mTerm');
const mFile = document.getElementById('mFile');
let modalToken = 0, modalTimer = null;

function openCase(i) {
  const c = currentCases[i];
  const L = I18N[lang];
  mFile.textContent = c.id.toLowerCase() + '.log';

  const lines = [
    `<span class="c-prompt">azizbek@pdp</span>:~$ cat ${c.id}.log`,
    '',
    `<span class="c-tag">[ ${c.tag} ]</span>  <span class="c-faint">${c.id}</span>`,
    `<span class="c-title">${c.title}</span>`,
    '',
    `<span class="c-head">${L['modal.problem']}</span>`,
    `  ${c.problem}`,
    '',
    `<span class="c-head">${L['modal.approach']}</span>`,
    ...c.steps.map((s) => `  <span class="c-arrow">›</span> <span class="c-step">${s}</span>`),
    '',
    `<span class="c-head">${L['modal.outcome']}</span>`,
    `  ${c.outcome}`,
    '',
    `<span class="c-faint"># stack:</span> ${c.stack.join('  ·  ')}`,
    ...(c.repo
      ? [`<span class="c-faint"># repo:</span> <a href="${c.repo}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan)">${c.repo.replace('https://', '')}</a>`]
      : ['<span class="c-faint"># repo:</span> private']),
    '',
    `<span class="c-prompt">azizbek@pdp</span>:~$ <span class="caret">▋</span>`,
  ];

  mTerm.innerHTML = '';
  triggerGlitch();
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  beep(660);

  const token = ++modalToken;
  let idx = 0;
  (function next() {
    if (token !== modalToken || idx >= lines.length) return;
    mTerm.innerHTML += lines[idx++] + '\n';
    mTerm.scrollTop = mTerm.scrollHeight;
    if (idx % 2 === 0) beep(900, 0.02);          // soft typing tick
    modalTimer = setTimeout(next, lines[idx - 1] === '' ? 45 : 95);
  })();
}
function closeCase() {
  modalToken++;                                   // cancel any in-flight typing
  clearTimeout(modalTimer);
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}
casesEl.addEventListener('click', (e) => {
  const card = e.target.closest('.case');
  if (card) openCase(+card.dataset.i);
});
modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeCase(); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCase(); });

/* ============ scroll progress + nav bg ============ */
const progress = document.getElementById('scrollProgress');
const nav = document.querySelector('.nav');
addEventListener('scroll', () => {
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  nav.style.background = scrollY > 40
    ? 'rgba(10,11,13,.92)'
    : 'linear-gradient(180deg,rgba(10,11,13,.85),transparent)';
}, { passive: true });

/* ============ reveal + stat counters ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      if (e.target.classList.contains('stat')) countUp(e.target);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

function countUp(stat) {
  const numEl = stat.querySelector('.stat__num');
  if (!numEl) return;
  const target = +numEl.dataset.target;
  let cur = 0;
  const step = Math.max(1, Math.round(target / 28));
  (function tick() {
    cur = Math.min(target, cur + step);
    numEl.textContent = cur;
    if (cur < target) requestAnimationFrame(tick);
  })();
}

/* ============ typed role ============ */
const typed = document.getElementById('typed');
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r % roles.length];
  c += deleting ? -1 : 1;
  if (c < 0) c = 0;
  typed.textContent = word.slice(0, c);
  let delay = deleting ? 45 : 90;
  if (!deleting && c === word.length) { delay = 1600; deleting = true; }
  else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
  setTimeout(type, delay);
}

/* ============ "currently" rotator ============ */
const nowText = document.getElementById('nowText');
let n = 0;
nowText.style.transition = 'opacity .25s';
setInterval(() => {
  n = (n + 1) % nowItems.length;
  nowText.style.opacity = 0;
  setTimeout(() => { nowText.textContent = nowItems[n]; nowText.style.opacity = 1; }, 250);
}, 3200);

/* ============ terminal boot (English system text) ============ */
const term = document.getElementById('term');
const termLines = [
  ['<span class="c-prompt">azizbek@pdp</span>:~$ whoami', 0],
  ['student developer · full-stack learner', 60],
  ['', 30],
  ['<span class="c-prompt">azizbek@pdp</span>:~$ ./scan --portfolio', 50],
  ['<span class="c-ok">[+]</span> full-stack (web) ..... <span class="c-ok">learning</span>', 60],
  ['<span class="c-ok">[+]</span> python basics ....... <span class="c-ok">ok</span>', 60],
  ['<span class="c-ok">[+]</span> automation scripts .. <span class="c-ok">ok</span>', 60],
  ['<span class="c-ok">[+]</span> web security (lab) .. <span class="c-ok">practicing</span>', 60],
  ['<span class="c-warn">[!]</span> coffee level ........ <span class="c-warn">low</span>', 60],
  ['', 30],
  ['<span class="c-prompt">azizbek@pdp</span>:~$ status', 50],
  ['<span class="c-ok">ready.</span> click a project to open ↓', 80],
];
let tli = 0;
function bootTerm() {
  if (tli >= termLines.length) { initHomeTerm(); return; }
  const [html, gap] = termLines[tli++];
  term.innerHTML += html + '\n';
  setTimeout(bootTerm, 260 + gap);
}

/* ============ glitch transition ============ */
function triggerGlitch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('is-glitching');
  setTimeout(() => document.body.classList.remove('is-glitching'), 200);
}

/* ============ interactive home terminal (ls / cd + history + tab) ============ */
function initHomeTerm() {
  const line = document.getElementById('termInputLine');
  const input = document.getElementById('homeTermInput');
  if (!line || !input) return;
  line.hidden = false;

  const FILES = ['about', 'work', 'stack', 'contact'];          // navigable "files"
  const CMDS = ['help', 'ls', 'cd', 'whoami', 'clear'];
  const hist = [];
  let hi = -1;

  const print = (html) => { term.innerHTML += html + '\n'; term.scrollTop = term.scrollHeight; };
  const goSection = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  function run(raw) {
    const text = raw.trim();
    print(`<span class="c-prompt">azizbek@pdp</span>:~$ ${text.replace(/</g, '&lt;')}`);
    if (!text) return;
    const [cmd, arg] = text.toLowerCase().split(/\s+/);

    if (cmd === 'clear') { term.innerHTML = ''; return; }
    if (cmd === 'help') {
      print('<span class="c-ok">commands:</span> ls · cd &lt;name&gt; · whoami · clear');
      print('try: <span class="c-ok">ls</span> then <span class="c-ok">cd about</span>');
    } else if (cmd === 'ls') {
      print('<span class="c-ok">about/</span>   work/   stack/   contact/');
    } else if (cmd === 'whoami') {
      print('student developer · learning full-stack · PDP University');
    } else if (cmd === 'cd') {
      if (arg === 'about' || arg === 'about/' || arg === 'dossier') {
        print('<span class="c-ok">opening dossier...</span>');
        triggerGlitch();
        setTimeout(() => { location.href = 'about/index.html'; }, 260);
      } else if (FILES.includes(arg)) {
        print(`<span class="c-ok">→ ${arg}</span>`); triggerGlitch(); goSection(arg);
      } else if (arg === '~' || arg === '/' || arg === '..' || !arg) {
        goSection('top');
      } else {
        print(`<span class="c-warn">cd: ${arg.replace(/</g, '&lt;')}: no such section</span>`);
      }
    } else {
      print(`<span class="c-warn">${cmd.replace(/</g, '&lt;')}: command not found — try "help"</span>`);
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const v = input.value;
      if (v.trim()) { hist.push(v); hi = hist.length; }
      run(v); input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hist.length && hi > 0) { hi--; input.value = hist[hi]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hi < hist.length - 1) { hi++; input.value = hist[hi]; }
      else { hi = hist.length; input.value = ''; }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const parts = input.value.toLowerCase().split(/\s+/);
      if (parts.length <= 1) {
        const m = CMDS.filter((c) => c.startsWith(parts[0]));
        if (m.length === 1) input.value = m[0] + ' ';
        else if (m.length > 1) print('<span class="c-faint">' + m.join('  ') + '</span>');
      } else if (parts[0] === 'cd') {
        const m = FILES.filter((f) => f.startsWith(parts[1] || ''));
        if (m.length === 1) input.value = 'cd ' + m[0];
        else if (m.length > 1) print('<span class="c-faint">' + m.join('  ') + '</span>');
      }
    }
  });
  // clicking anywhere in the terminal focuses the input
  document.querySelector('.terminal')?.addEventListener('click', () => input.focus());
}

/* ============ custom cursor ============ */
const cursor = document.getElementById('cursor');
const cursorLabel = document.getElementById('cursorLabel');
let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
(function loop() {
  cx += (tx - cx) * 0.6; cy += (ty - cy) * 0.6;
  cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);
})();
document.addEventListener('pointerover', (e) => {
  const caseEl = e.target.closest('[data-cursor-case]');
  const linkEl = e.target.closest('[data-cursor],a,button');
  cursor.classList.remove('is-link', 'is-case');
  if (caseEl) { cursor.classList.add('is-case'); cursorLabel.textContent = 'OPEN\nFILE'; }
  else if (linkEl) { cursor.classList.add('is-link'); cursorLabel.textContent = ''; }
  else { cursorLabel.textContent = ''; }
});
casesEl.addEventListener('pointermove', (e) => {
  const card = e.target.closest('.case');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
  card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
});

/* ============ sound (WebAudio, opt-in) ============ */
let audioCtx = null, soundOn = false;
const soundBtn = document.getElementById('soundToggle');
soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.classList.toggle('on', soundOn);
  if (soundOn && !audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (soundOn) beep(880);
});
function beep(freq = 720, dur = 0.04) {
  if (!soundOn || !audioCtx) return;
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = 'square'; o.frequency.value = freq;
  g.gain.setValueAtTime(0.04, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(); o.stop(audioCtx.currentTime + dur);
}

/* ============ PRELOADER ============ */
document.body.classList.add('loading');
const preLog = document.getElementById('preLog');
const preBar = document.getElementById('preBar');
const prePct = document.getElementById('prePct');
const preloader = document.getElementById('preloader');
const preLines = [
  'initializing secure shell...',
  'mounting /dev/portfolio',
  'loading modules [re, osint, fullstack]',
  '<span class="c-ok">decrypting case files... ok</span>',
  'establishing connection',
  '<span class="c-ok">access granted ✓</span>',
];
let pi = 0, pct = 0;
function preStep() {
  if (pi < preLines.length) { preLog.innerHTML += preLines[pi++] + '\n'; setTimeout(preStep, 230); }
}
function preProgress() {
  pct = Math.min(100, pct + Math.random() * 14 + 4);
  preBar.style.width = pct + '%';
  prePct.textContent = Math.floor(pct);
  if (pct < 100) setTimeout(preProgress, 130);
  else setTimeout(finishLoad, 450);
}
function finishLoad() {
  preloader.classList.add('done');
  document.body.classList.remove('loading');
  type();
  setTimeout(bootTerm, 400);
  // decrypt-reveal the name
  document.querySelectorAll('.hero__title .line').forEach((el, i) =>
    setTimeout(() => decrypt(el, el.textContent.trim()), 150 + i * 220));
}

/* ============ DECRYPT / SCRAMBLE TEXT ============ */
function decrypt(el, finalText, duration = 900) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = finalText; return; }
  const chars = '!<>-_\\/[]{}=+*^?#________01ABCDEF';
  const len = finalText.length;
  const totalFrames = Math.round(duration / 30);
  let frame = 0;
  (function step() {
    const revealCount = Math.floor((frame / totalFrames) * len);
    let out = '';
    for (let i = 0; i < len; i++) {
      if (i < revealCount || finalText[i] === ' ') out += finalText[i];
      else out += `<span class="glitch">${chars[(Math.random() * chars.length) | 0]}</span>`;
    }
    el.innerHTML = out;
    if (frame++ <= totalFrames) setTimeout(step, 30);
    else el.textContent = finalText;
  })();
}

/* ============ star sprite for particles ============ */
function makeStarTexture() {
  const s = 64, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d'), c = s / 2;
  // soft round glow
  const g = ctx.createRadialGradient(c, c, 0, c, c, c);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.28, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  // 4-point star spikes
  ctx.strokeStyle = 'rgba(255,255,255,0.95)';
  ctx.lineWidth = 1.4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(c, 5); ctx.lineTo(c, s - 5);
  ctx.moveTo(5, c); ctx.lineTo(s - 5, c);
  ctx.stroke();
  return new THREE.CanvasTexture(cv);
}

/* ============ THREE.JS HERO FIELD ============ */
function initGL() {
  if (typeof THREE === 'undefined') return; // CDN offline → graceful skip
  try {
  const canvas = document.getElementById('gl');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 6;

  // particle shell
  const N = 1400, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const rad = 3.1 + Math.random() * 0.7;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = rad * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = rad * Math.sin(ph) * Math.sin(th);
    pos[i * 3 + 2] = rad * Math.cos(ph);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    map: makeStarTexture(),
    color: 0x39ff8b, size: 0.16, transparent: true, opacity: 0.9,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  scene.add(pts);

  // wireframe core
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 1),
    new THREE.MeshBasicMaterial({ color: 0x37e6ff, wireframe: true, transparent: true, opacity: 0.14 }),
  );
  scene.add(ico);

  let mx = 0, my = 0;
  addEventListener('pointermove', (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  function resize() {
    const b = canvas.parentElement.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(b.width, b.height, false);
    camera.aspect = b.width / b.height || 1;
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  (function render() {
    requestAnimationFrame(render);
    if (!reduced) {
      pts.rotation.y += 0.0012; pts.rotation.x += 0.0005;
      ico.rotation.y -= 0.001; ico.rotation.x += 0.0008;
      camera.position.x += (mx * 1.3 - camera.position.x) * 0.04;
      camera.position.y += (-my * 1.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
    }
    renderer.render(scene, camera);
  })();
  } catch (err) {
    // WebGL disabled / unsupported — never let it block the page load
    console.warn('WebGL unavailable, skipping 3D field:', err);
    const bgfx = document.querySelector('.bgfx');
    if (bgfx) bgfx.style.display = 'none';
  }
}

/* ============ INIT ============ */
applyLang(lang);          // paint language before reveal
initGL();                 // 3D hero field (self-guarded against WebGL failure)
preStep();
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  pct = 100; preBar.style.width = '100%'; prePct.textContent = '100'; finishLoad();
} else {
  preProgress();          // only run the animated loader when motion is allowed
}
