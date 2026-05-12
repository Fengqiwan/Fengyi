/* ==============================================
   i18n 引擎 — 外部 JSON 语言包方案
   
   ┌─────────────┐   fetch    ┌───────────┐
   │ lang/zh.json │ ────────→ │           │
   │ lang/en.json │ ────────→ │  flatten  │ → 扁平 Map → 写入 DOM
   │ lang/ko.json │ ────────→ │           │
   └─────────────┘            └───────────┘
                                   ↓
                              缓存到 cache
   
   优势：
   · 翻译文件独立管理，可交给翻译人员直接编辑 JSON
   · 按需加载，首次只加载当前语言
   · 新增语言 = 新增 JSON 文件 + HTML 加一个按钮
   · 嵌套结构便于组织大量文本，展平后便于 DOM 查找
   ============================================== */


/* ------ 翻译缓存 ------
   结构：{ zh: { "header.siteName": "测试站点", ... }, en: {...}, ... }
   每种语言只 fetch 一次，之后从缓存读取 */
var langCache = {};


/* ------ 当前语言 ------ */
var currentLang = 'zh';


/* ------ 嵌套对象 → 扁平 Map ------
   
   输入：{ header: { siteName: "测试站点" }, a1: { s1: { title: "..." } } }
   输出：{ "header.siteName": "测试站点", "a1.s1.title": "..." }
   
   递归遍历所有层级，用点号连接路径作为 key
   遇到非对象值（字符串/数字/数组）就写入结果 */
function flatten(obj, prefix) {
    prefix = prefix || '';
    var result = {};
    for (var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        var fullKey = prefix ? (prefix + '.' + key) : key;
        var value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // 是嵌套对象 → 递归展平
            var nested = flatten(value, fullKey);
            for (var nk in nested) {
                result[nk] = nested[nk];
            }
        } else {
            // 是终值 → 直接存入
            result[fullKey] = value;
        }
    }
    return result;
}


/* ------ 加载语言包 ------
   1. 检查缓存，有则直接返回
   2. 无缓存 → fetch JSON 文件 → flatten → 存入缓存
   3. 返回扁平翻译 Map */
function loadLanguage(lang) {
    // 已缓存 → 直接返回 Promise
    if (langCache[lang]) {
        return Promise.resolve(langCache[lang]);
    }

    return fetch('lang/' + lang + '.json')
        .then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(nested) {
            // 嵌套 JSON → 扁平 Map → 缓存
            langCache[lang] = flatten(nested);
            return langCache[lang];
        })
        .catch(function(err) {
            console.error('[i18n] 加载 ' + lang + '.json 失败:', err);
            console.error('[i18n] 请确保通过 HTTP 服务器访问（非 file:// 协议）');
            return null;
        });
}


/* ------ 应用语言到 DOM ------
   1. 遍历 [data-i18n] → textContent 替换
   2. 遍历 [data-i18n-html] → innerHTML 替换
   3. 更新 <html lang>、页面标题、按钮状态
   4. 记住选择到 localStorage */
function applyLanguage(lang) {
    loadLanguage(lang).then(function(data) {
        if (!data) return;    // 加载失败则不切换
        currentLang = lang;

        // ① 替换纯文本
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (data[key] !== undefined) {
                el.textContent = data[key];
            }
        });

        // ② 替换含 HTML 的内容（如 <strong>）
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            if (data[key] !== undefined) {
                el.innerHTML = data[key];
            }
        });

        // ③ 更新 html lang 属性
        var langMap = { zh: 'zh-CN', en: 'en', ko: 'ko' };
        document.documentElement.lang = langMap[lang] || lang;

        // ④ 更新页面标题
        if (data['header.siteName']) {
            document.title = data['header.siteName'];
        }

        // ⑤ 更新按钮选中状态
        document.querySelectorAll('.lang-option').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // ⑥ 记住用户选择
        try { localStorage.setItem('preferred_lang', lang); } catch(e) {}

        // ⑦ 关闭浮窗
        langPopup.classList.remove('show');
    });
}


/* ==============================================
   交互绑定
   ============================================== */

var langBtn   = document.getElementById('langBtn');
var langPopup = document.getElementById('langPopup');
var tocToggle = document.getElementById('tocToggle');
var tocPanel  = document.getElementById('tocPanel');


/* ------ 语言弹窗 ------ */
langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langPopup.classList.toggle('show');
    tocPanel.classList.remove('show');
    tocToggle.classList.remove('active');
});

document.querySelectorAll('.lang-option').forEach(function(btn) {
    btn.addEventListener('click', function() {
        applyLanguage(this.getAttribute('data-lang'));
    });
});


/* ------ 目录面板 ------ */
tocToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    tocPanel.classList.toggle('show');
    tocToggle.classList.toggle('active');
    langPopup.classList.remove('show');
});

// 点击目录链接 → 关闭面板（浏览器自动滚动到锚点）
tocPanel.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        tocPanel.classList.remove('show');
        tocToggle.classList.remove('active');
    });
});


/* ------ 点击外部关闭 ------ */
document.addEventListener('click', function(e) {
    if (!langBtn.contains(e.target) && !langPopup.contains(e.target)) {
        langPopup.classList.remove('show');
    }
    if (!tocToggle.contains(e.target) && !tocPanel.contains(e.target)) {
        tocPanel.classList.remove('show');
        tocToggle.classList.remove('active');
    }
});


/* ==============================================
   页面初始化
   · 检查 localStorage 中是否有上次选择的语言
   · 如果不是默认的 zh → 自动切换
   · 首次加载中文时 HTML 已有内容，无需 fetch（可选优化）
   ============================================== */
(function init() {
    var saved = '';
    try { saved = localStorage.getItem('preferred_lang'); } catch(e) {}
    if (saved && saved !== 'zh') {
        applyLanguage(saved);
    }
})();
