/* ===================================================================
   AZIZBEK MAMANOV — About / Dossier (honest build)
   =================================================================== */

/* Real PGP public key (Ed25519). Private key stays off the web. */
const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEajXO5xYJKwYBBAHaRw8BAQdAqBz/0olXnu+9UK7pVBC8bh/as/KO08hdXPt+
4+dmiNW0REF6aXpiZWsgTWFtYW5vdiAocG9ydGZvbGlvIGNvbnRhY3Qga2V5KSA8
bWFtYW5vdmF6aXpiZWsxOEBnbWFpbC5jb20+iJAEExYKADgWIQTy/344T4kgpU7l
q7dylacSKlL6bgUCajXO5wIbIwULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRBy
lacSKlL6bqLWAQDE2ozg4sQNnlAn7JqebSoDxjYpyhFxGkKMDPdraXtN/gEA+c1p
I6EwbBQ9gkOKJ/j2d4IBONxasFPvaS0jgT4OjA24OARqNc7nEgorBgEEAZdVAQUB
AQdAIQUywx4Mmfpo2AF7XoWV+pc/aZDtYJAYFiGcwRJfpk0DAQgHiHgEGBYKACAW
IQTy/344T4kgpU7lq7dylacSKlL6bgUCajXO5wIbDAAKCRBylacSKlL6biZAAP0a
Ab6k8ybUb2/YhhzbTYuGgPM14cr1+La2oeaLAuesWAD+Mqw9eimRzXxEP3Elue2v
KM6lg4OlKKI6mqXoORjTeA4=
=6+L2
-----END PGP PUBLIC KEY BLOCK-----`;

const I18N = {
  uz: {
    badge: 'DASTURCHI DOSSIERI',
    subtitle: "// universitet talabasi — full-stack & veb-xavfsizlikni o'rganmoqda",

    'bio.title': '01. TARJIMAI HOL',
    'bio.lead': "18 yoshli dasturchi — <strong>buzilmaydigan narsa qurish</strong> uchun avval <strong>jarayonni tushunishga</strong> intiluvchi.",
    'bio.p1': "Dasturlashni 2023-yil yozida 6 oylik Python kursida 0 dan o'rgandim. 2025-yilda PDP Universitetiga grant asosida o'qishga kirdim va full-stack yo'nalishini o'rganmoqdaman (full-stack — universitetda majburiy fan edi).",
    'bio.p2': "Men uchun eng muhimi — kod ortida nima sodir bo'layotganini tushunish, chunki jarayonni tushungan odam xato qayerda ekanini biladi. Kelajakda software development (Java) yo'nalishida chuqurlashmoqchiman. AI'ni esa ishni tezlashtiradigan vosita sifatida to'g'ri ishlataman.",

    'timeline.title': '02. FAOLIYAT JURNALI',
    'status.active': 'FAOL',
    'status.resolved': 'YAKUNLANGAN',
    'exp.title1': 'Dasturiy yordamchi — mahalla idorasi',
    'exp.desc1': "Mahalla idorasiga texnik va dasturiy masalalarda ko'ngilli yordam beraman.",
    'exp.title2': 'PDP University — talaba (grant)',
    'exp.desc2': "Kompyuter fanlari va full-stack veb-dasturlashni o'rganmoqdaman. HTML/CSS, full-stack (majburiy fan) va dasturlash asoslarini o'tdim.",
    'exp.title3': 'Python kursi (6 oy) + veb-xavfsizlik amaliyoti',
    'exp.desc3': "Python'ni 0 dan 6 oyda o'rgandim (funksiyalar, biroz OOP). Veb-xavfsizlikka qiziqib, XSS kabi zaifliklarni DVWA (Docker'dagi qonuniy laboratoriya) muhitida sinab ko'rdim.",

    'net.title': '03. TARMOQ XARITASI (demo)',
    'net.hint': '// tugunni bosing — terminalda virtual skan ishlaydi',

    'hud.title': "04. KO'NIKMALAR MATRITSASI",
    'hud.py': 'PYTHON (asoslar + biroz OOP)',
    'hud.web': "WEB / FULL-STACK (o'rganmoqda)",
    'hud.scripts': 'AVTOMATLASHTIRISH SKRIPTLARI',
    'hud.sec': 'VEB-XAVFSIZLIK AMALIYOTI (DVWA lab)',

    'contact.title': '05. ALOQA KANALLARI',

    'pgp.title': '// xabarni shifrlab yuborish',
    'pgp.desc': "Menga maxfiy xabar yuboring — u brauzeringizda mening ochiq kalitim bilan shifrlanadi.",
    'pgp.ph': 'xabaringiz...',
    'pgp.btn': 'SHIFRLASH →',
    'pgp.copy': 'NUSXALASH',
    'pgp.copied': 'NUSXALANDI ✓',
    'pgp.showkey': "ochiq kalitni ko'rsatish",
    'pgp.hidekey': 'kalitni yashirish',
    'pgp.done': '✓ shifrlandi — nusxalab menga yuboring',
    'pgp.empty': 'avval xabar yozing',
    'pgp.err': 'shifrlashda xato',

    'cli.placeholder': 'buyruq kiriting...',
    'cli.welcome': "So'rov yuborish uchun buyruq yozing yoki tugmani bosing. (↑/↓ tarix, Tab to'ldirish). Boshlash: <span class='c-accent'>help</span>",
    'cli.invalid': 'Noma\'lum buyruq. Ro\'yxat uchun "help" deb yozing.',
    'cli.help': "Mavjud buyruqlar:\n  whoami    - Men kimman\n  skills    - Texnologiyalar\n  projects  - Loyihalarim\n  nmap      - Demo skan (vizual)\n  contact   - Aloqa kanallari\n  clear     - Konsolni tozalash",
    'cli.whoami': "AZIZBEK MAMANOV // 18\n--------------------\nUniversitet talabasi (PDP University, grant).\n2023-yilda Python bilan boshlaganman.\nMaqsadim — jarayonni chuqur tushunib, buzilmaydigan tizimlar qurish.\nQiziqishlarim: full-stack, avtomatlashtirish, veb-xavfsizlik (qonuniy lab).",
    'cli.skills': "TEXNOLOGIYALAR\n--------------\n- Tillar: Python (asoslar, biroz OOP), C++ (asoslar), JavaScript\n- Web: HTML, CSS, Node/Express, biroz React/Next.js\n- Ma'lumotlar: SQLite, PostgreSQL\n- Vositalar: Linux, Git, Docker (lab)\n- O'rganmoqda: full-stack, software development (Java)",
    'cli.projects': "LOYIHALAR (o'quv / amaliy)\n-------------------------\n- dmed         tibbiy yozuvlar tizimi (Express + React)\n- KUTUBXONA    kutubxona boshqaruv tizimi\n- pdp-davomat  davomat / LMS (Flask)\n- edu-platform online kurs platformasi (Next.js)\n- taxi-bot     Telegram bot\n- userbot      AI bilan ishlaydigan Telegram userbot\n- skriptlar    turli avtomatlashtirish\n* ko'pchiligi o'rganish jarayonida, AI yordamida qilingan",
    'cli.contact': "ALOQA\n-----\n- Email:     mamanovazizbek18@gmail.com\n- Telegram:  @mamanovazizbek\n- Instagram: @azizbekmamanov_\n- GitHub:    github.com/azizbekmamanov"
  },
  en: {
    badge: 'DEVELOPER DOSSIER',
    subtitle: '// university student — learning full-stack & web security',

    'bio.title': '01. BIOGRAPHY',
    'bio.lead': "An 18-year-old developer who believes in <strong>understanding the process first</strong>, then <strong>building things that don't break</strong>.",
    'bio.p1': 'I learned to code from zero in a 6-month Python course in the summer of 2023. In 2025 I joined PDP University on a grant, where I am learning full-stack development (which was a required subject).',
    'bio.p2': "What matters most to me is understanding what happens behind the code — because whoever understands the process knows where the bug is. Next I want to go deeper into software development with Java. I use AI as a tool to speed up the work, the right way.",

    'timeline.title': '02. ACTIVITY LOG',
    'status.active': 'ACTIVE',
    'status.resolved': 'DONE',
    'exp.title1': 'Software assistant — local mahalla office',
    'exp.desc1': 'I volunteer to help the local office with technical and software tasks.',
    'exp.title2': 'PDP University — student (grant)',
    'exp.desc2': 'Studying computer science and full-stack web development. Covered HTML/CSS, full-stack (a required subject), and programming fundamentals.',
    'exp.title3': 'Python course (6 months) + web-security practice',
    'exp.desc3': 'Learned Python from zero in 6 months (functions, a bit of OOP). Curious about web security, I practiced vulnerabilities like XSS inside DVWA — a legal Docker-based sandbox.',

    'net.title': '03. NETWORK MAP (demo)',
    'net.hint': '// click a node — a virtual scan runs in the terminal',

    'hud.title': '04. SKILL MATRIX',
    'hud.py': 'PYTHON (basics + some OOP)',
    'hud.web': 'WEB / FULL-STACK (learning)',
    'hud.scripts': 'AUTOMATION SCRIPTS',
    'hud.sec': 'WEB-SECURITY PRACTICE (DVWA lab)',

    'contact.title': '05. CONTACT CHANNELS',

    'pgp.title': '// send an encrypted message',
    'pgp.desc': 'Send me a private message — it gets encrypted in your browser with my public key.',
    'pgp.ph': 'your message...',
    'pgp.btn': 'ENCRYPT →',
    'pgp.copy': 'COPY',
    'pgp.copied': 'COPIED ✓',
    'pgp.showkey': 'show public key',
    'pgp.hidekey': 'hide public key',
    'pgp.done': '✓ encrypted — copy & send it to me',
    'pgp.empty': 'type a message first',
    'pgp.err': 'encryption error',

    'cli.placeholder': 'type a command...',
    'cli.welcome': "Type a command or click a shortcut. (↑/↓ history, Tab to complete). Start with <span class='c-accent'>help</span>",
    'cli.invalid': 'Unknown command. Type "help" for a list.',
    'cli.help': 'Available commands:\n  whoami    - Who I am\n  skills    - Technologies\n  projects  - My projects\n  nmap      - Demo scan (visual)\n  contact   - Contact channels\n  clear     - Clear the console',
    'cli.whoami': "AZIZBEK MAMANOV // 18\n--------------------\nUniversity student (PDP University, grant).\nStarted with Python back in 2023.\nGoal: deeply understand the process and build systems that don't break.\nInterests: full-stack, automation, web security (legal lab).",
    'cli.skills': 'TECHNOLOGIES\n------------\n- Languages: Python (basics, some OOP), C++ (basics), JavaScript\n- Web: HTML, CSS, Node/Express, some React/Next.js\n- Data: SQLite, PostgreSQL\n- Tools: Linux, Git, Docker (lab)\n- Learning: full-stack, software development (Java)',
    'cli.projects': 'PROJECTS (learning / practical)\n------------------------------\n- dmed         medical-records system (Express + React)\n- KUTUBXONA    library management system\n- pdp-davomat  attendance / LMS (Flask)\n- edu-platform online course platform (Next.js)\n- taxi-bot     Telegram bot\n- userbot      AI-powered Telegram userbot\n- scripts      various automation\n* most are learning projects, built with AI assistance',
    'cli.contact': 'CONTACT\n-------\n- Email:     mamanovazizbek18@gmail.com\n- Telegram:  @mamanovazizbek\n- Instagram: @azizbekmamanov_\n- GitHub:    github.com/azizbekmamanov'
  },
  ru: {
    badge: 'ДОСЬЕ РАЗРАБОТЧИКА',
    subtitle: '// студент университета — изучаю full-stack и веб-безопасность',

    'bio.title': '01. БИОГРАФИЯ',
    'bio.lead': "18-летний разработчик, который верит, что нужно <strong>сначала понять процесс</strong>, а потом <strong>строить то, что не ломается</strong>.",
    'bio.p1': 'Я научился программировать с нуля на 6-месячном курсе Python летом 2023 года. В 2025 поступил в PDP University на грант, где изучаю full-stack разработку (это был обязательный предмет).',
    'bio.p2': 'Для меня важнее всего — понимать, что происходит за кодом, ведь кто понимает процесс, тот знает, где ошибка. Дальше хочу углубиться в разработку ПО на Java. ИИ использую как инструмент для ускорения работы, правильным образом.',

    'timeline.title': '02. ЖУРНАЛ АКТИВНОСТИ',
    'status.active': 'АКТИВЕН',
    'status.resolved': 'ЗАВЕРШЕНО',
    'exp.title1': 'Программный помощник — местный офис махалли',
    'exp.desc1': 'Помогаю местному офису по техническим и программным вопросам (волонтёр).',
    'exp.title2': 'PDP University — студент (грант)',
    'exp.desc2': 'Изучаю информатику и full-stack веб-разработку. Прошёл HTML/CSS, full-stack (обязательный предмет) и основы программирования.',
    'exp.title3': 'Курс Python (6 мес.) + практика веб-безопасности',
    'exp.desc3': 'Выучил Python с нуля за 6 месяцев (функции, немного ООП). Интересуясь веб-безопасностью, практиковал уязвимости вроде XSS в DVWA — легальной песочнице на Docker.',

    'net.title': '03. КАРТА СЕТИ (demo)',
    'net.hint': '// нажмите узел — в терминале запустится виртуальный скан',

    'hud.title': '04. МАТРИЦА НАВЫКОВ',
    'hud.py': 'PYTHON (основы + немного ООП)',
    'hud.web': 'WEB / FULL-STACK (изучаю)',
    'hud.scripts': 'СКРИПТЫ АВТОМАТИЗАЦИИ',
    'hud.sec': 'ПРАКТИКА ВЕБ-БЕЗОПАСНОСТИ (DVWA lab)',

    'contact.title': '05. КАНАЛЫ СВЯЗИ',

    'pgp.title': '// отправить зашифрованное сообщение',
    'pgp.desc': 'Отправьте мне приватное сообщение — оно шифруется в вашем браузере моим открытым ключом.',
    'pgp.ph': 'ваше сообщение...',
    'pgp.btn': 'ЗАШИФРОВАТЬ →',
    'pgp.copy': 'КОПИРОВАТЬ',
    'pgp.copied': 'СКОПИРОВАНО ✓',
    'pgp.showkey': 'показать открытый ключ',
    'pgp.hidekey': 'скрыть ключ',
    'pgp.done': '✓ зашифровано — скопируйте и пришлите мне',
    'pgp.empty': 'сначала введите сообщение',
    'pgp.err': 'ошибка шифрования',

    'cli.placeholder': 'введите команду...',
    'cli.welcome': "Введите команду или нажмите кнопку. (↑/↓ история, Tab дополнение). Начните с <span class='c-accent'>help</span>",
    'cli.invalid': 'Неизвестная команда. Введите "help" для списка.',
    'cli.help': 'Доступные команды:\n  whoami    - Кто я\n  skills    - Технологии\n  projects  - Мои проекты\n  nmap      - Демо-скан (визуальный)\n  contact   - Каналы связи\n  clear     - Очистить консоль',
    'cli.whoami': "АЗИЗБЕК МАМАНОВ // 18\n--------------------\nСтудент университета (PDP University, грант).\nНачал с Python ещё в 2023.\nЦель — глубоко понять процесс и строить системы, которые не ломаются.\nИнтересы: full-stack, автоматизация, веб-безопасность (легальная лаборатория).",
    'cli.skills': 'ТЕХНОЛОГИИ\n----------\n- Языки: Python (основы, немного ООП), C++ (основы), JavaScript\n- Web: HTML, CSS, Node/Express, немного React/Next.js\n- Данные: SQLite, PostgreSQL\n- Инструменты: Linux, Git, Docker (lab)\n- Изучаю: full-stack, разработку ПО (Java)',
    'cli.projects': 'ПРОЕКТЫ (учебные / практические)\n-------------------------------\n- dmed         система медкарт (Express + React)\n- KUTUBXONA    система управления библиотекой\n- pdp-davomat  посещаемость / LMS (Flask)\n- edu-platform платформа онлайн-курсов (Next.js)\n- taxi-bot     Telegram-бот\n- userbot      Telegram userbot с ИИ\n- scripts      разная автоматизация\n* большинство — учебные проекты, сделаны с помощью ИИ',
    'cli.contact': 'КОНТАКТЫ\n--------\n- Email:     mamanovazizbek18@gmail.com\n- Telegram:  @mamanovazizbek\n- Instagram: @azizbekmamanov_\n- GitHub:    github.com/azizbekmamanov'
  }
};

let currentLang = localStorage.getItem('lang') || 'uz';

const sysTimeEl = document.getElementById('sysTime');
const langSwitchEl = document.getElementById('langSwitch');
const termInputEl = document.getElementById('termInput');
const termOutputsEl = document.getElementById('termOutputs');

/* ===== glitch transition ===== */
function triggerGlitch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('is-glitching');
  setTimeout(() => document.body.classList.remove('is-glitching'), 200);
}

/* ===== clock ===== */
function updateClock() {
  const n = new Date();
  const p = (x) => String(x).padStart(2, '0');
  sysTimeEl.textContent = `SYS_TIME: ${n.getFullYear()}.${p(n.getMonth() + 1)}.${p(n.getDate())} ${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ===== i18n ===== */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v == null) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = v;
    else el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  document.querySelectorAll('.lang-btn').forEach((b) =>
    b.classList.toggle('active', b.dataset.lang === lang));

  termInputEl.placeholder = dict['cli.placeholder'];
  termOutputsEl.innerHTML = `<div>${dict['cli.welcome']}</div>`;
}

langSwitchEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) { applyLanguage(btn.dataset.lang); triggerGlitch(); }
});

/* ===== interactive CLI: commands, history, tab ===== */
const RESPONSES = {
  help: 'cli.help', whoami: 'cli.whoami', skills: 'cli.skills',
  'skills --list': 'cli.skills', projects: 'cli.projects',
  contact: 'cli.contact', creds: 'cli.contact', credentials: 'cli.contact',
};
const COMMANDS = ['help', 'whoami', 'skills', 'projects', 'nmap', 'contact', 'clear'];
const history = [];
let histIdx = -1;

function nmapOutput(target) {
  return `Starting demo scan${target ? ' on ' + target : ''} — visual only\n`
    + 'PORT     STATE  SERVICE   VERSION\n'
    + '80/tcp   open   http      Nginx (static)\n'
    + '3000/tcp open   node      Express — DMED API\n'
    + '5000/tcp open   python    Flask — pdp-davomat\n'
    + '5432/tcp open   postgres  PostgreSQL 15\n'
    + '* not a real scan — just shows the stack behind my projects';
}

function printToTerminal(inputText) {
  const command = inputText.trim().toLowerCase();
  const dict = I18N[currentLang];

  if (command === 'clear') { termOutputsEl.innerHTML = ''; return; }
  if (command === '') return;

  const wrap = document.createElement('div');
  wrap.style.marginBottom = '12px';

  const echo = document.createElement('div');
  echo.innerHTML = '<span class="term-prompt">guest@mamanov:~$</span> ';
  const echoCmd = document.createElement('span');
  echoCmd.className = 'c-text';
  echoCmd.textContent = inputText;       // textContent → no HTML injection
  echo.appendChild(echoCmd);
  wrap.appendChild(echo);

  const res = document.createElement('div');
  res.style.whiteSpace = 'pre-wrap';
  res.style.marginTop = '4px';

  const base = command.split(' ')[0];
  if (base === 'nmap') {
    res.innerHTML = `<span class="c-cyan">${nmapOutput(command.split(' ')[1] || '')}</span>`;
  } else if (RESPONSES[command]) {
    const cls = command === 'whoami' ? 'c-accent'
      : (command === 'contact' || command === 'creds' || command === 'credentials') ? 'c-text'
      : 'c-cyan';
    res.innerHTML = `<span class="${cls}">${dict[RESPONSES[command]]}</span>`;
  } else {
    res.innerHTML = `<span class="c-red">${dict['cli.invalid']}</span>`;
  }
  wrap.appendChild(res);
  termOutputsEl.appendChild(wrap);
  termOutputsEl.scrollTop = termOutputsEl.scrollHeight;
}

function runCommand(text) {
  if (text.trim()) { history.push(text); histIdx = history.length; }
  printToTerminal(text);
}

termInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCommand(termInputEl.value);
    termInputEl.value = '';
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (history.length && histIdx > 0) { histIdx--; termInputEl.value = history[histIdx]; }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx < history.length - 1) { histIdx++; termInputEl.value = history[histIdx]; }
    else { histIdx = history.length; termInputEl.value = ''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const cur = termInputEl.value.trim().toLowerCase();
    if (!cur) return;
    const matches = COMMANDS.filter((c) => c.startsWith(cur));
    if (matches.length === 1) termInputEl.value = matches[0];
    else if (matches.length > 1) printToTerminal('tab → ' + matches.join('  '));
  }
});

document.querySelector('.body--terminal').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-shortcut');
  if (btn) { runCommand(btn.dataset.cmd); termInputEl.focus(); }
});

/* ===== network nodes → virtual nmap ===== */
document.getElementById('netRow').addEventListener('click', (e) => {
  const node = e.target.closest('.net-node');
  if (node) { runCommand('nmap ' + node.dataset.target); triggerGlitch(); }
});

/* ===== PGP encrypt panel ===== */
const pgpInput = document.getElementById('pgpInput');
const pgpOut = document.getElementById('pgpOut');
const pgpKey = document.getElementById('pgpKey');
const pgpEncrypt = document.getElementById('pgpEncrypt');
const pgpCopy = document.getElementById('pgpCopy');
const pgpKeyToggle = document.getElementById('pgpKeyToggle');

pgpEncrypt.addEventListener('click', async () => {
  const dict = I18N[currentLang];
  const text = pgpInput.value.trim();
  if (!text) { pgpOut.hidden = false; pgpOut.textContent = dict['pgp.empty']; return; }
  if (typeof openpgp === 'undefined') { pgpOut.hidden = false; pgpOut.textContent = dict['pgp.err']; return; }
  try {
    pgpEncrypt.disabled = true;
    const pub = await openpgp.readKey({ armoredKey: PUBLIC_KEY });
    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text }),
      encryptionKeys: pub,
    });
    pgpOut.hidden = false;
    pgpOut.textContent = encrypted;
    pgpCopy.hidden = false;
    triggerGlitch();
  } catch (err) {
    pgpOut.hidden = false;
    pgpOut.textContent = dict['pgp.err'] + ': ' + err.message;
  } finally {
    pgpEncrypt.disabled = false;
  }
});

pgpCopy.addEventListener('click', () => {
  const dict = I18N[currentLang];
  navigator.clipboard.writeText(pgpOut.textContent).then(() => {
    pgpCopy.textContent = dict['pgp.copied'];
    setTimeout(() => { pgpCopy.textContent = dict['pgp.copy']; }, 1800);
  });
});

pgpKeyToggle.addEventListener('click', () => {
  const dict = I18N[currentLang];
  if (pgpKey.hidden) {
    pgpKey.hidden = false;
    pgpKey.textContent = PUBLIC_KEY;
    pgpKeyToggle.textContent = dict['pgp.hidekey'];
  } else {
    pgpKey.hidden = true;
    pgpKeyToggle.textContent = dict['pgp.showkey'];
  }
});

/* ===== glitch on leaving via the back link ===== */
document.querySelector('.btn-back')?.addEventListener('click', triggerGlitch);

/* ===== init ===== */
applyLanguage(currentLang);
