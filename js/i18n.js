// 语言切换
let currentLang = localStorage.getItem('lang') || 'zh';

// 从 HTML 的 data-page 属性读取当前页面名称
// <body data-page="index">
async function loadLocale(lang) {
  const page = document.body.dataset.page;
  const [common, pageData] = await Promise.all([
    fetch(`../locales/common/${lang}.json`).then(r => r.json()),
    fetch(`../locales/${page}/${lang}.json`).then(r => r.json()),
  ]);
  // 页面包覆盖公共包（同 key 时页面优先）
  return { ...common, ...pageData };
}


// 将 JSON 展平：{ "a1.title": "..." }
function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null) Object.assign(acc, flatten(v, key));
    else acc[key] = v;
    return acc;
  }, {});
}

function applyTranslations(dict) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = dict[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });
  // 更新 html lang 属性
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
}

function updateActiveLangBtn() {
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// 填充推荐卡片（内容来自语言包）
function renderRecommend(dict) {
  const grid = document.getElementById('recommendGrid');
  if (!grid) return;
  grid.innerHTML = '';
  let i = 1;
  while (dict[`recommend.r${i}.title`]) {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#" class="recommend-card">
        <span class="recommend-tag" data-i18n="recommend.r${i}.tag">${dict[`recommend.r${i}.tag`]}</span>
        <h3>${dict[`recommend.r${i}.title`]}</h3>
        <p>${dict[`recommend.r${i}.desc`]}</p>
      </a>`;
    grid.appendChild(li);
    i++;
  }
}

export async function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const dict = flatten(await loadLocale(lang));
  applyTranslations(dict);
  renderRecommend(dict);
  updateActiveLangBtn();
}

export async function initI18n() {
  // 绑定语言切换按钮（在 layout 注入后调用）
  document.getElementById('langBtn').addEventListener('click', () => {
    document.getElementById('langPopup').classList.toggle('open');
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLang(btn.dataset.lang);
      document.getElementById('langPopup').classList.remove('open');
    });
  });
  await switchLang(currentLang);
}
