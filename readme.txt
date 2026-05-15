<!-- 项目架构 -->

project/
├─ layouts/
│  ├─ header.html          ← 含语言切换
│  ├─ footer.html
│  ├─ toc-panel.html       ← 目录面板（结构固定，内容由JS填充）
│  └─ recommend.html       ← 推荐栏（结构固定，内容由JS填充）
│
├─ locales/
│  ├─ common/ 
|  |  ├─zh.json
│  |  ├─ en.json
│  |  └─ ko.json
│  └─ pages/ 
|     ├─zh.json
│     ├─ en.json
│     └─ ko.json
│
├─ css/
│  ├─ base.css
│  ├─ header.css
│  ├─ main.css
│  ├─ article.css
│  ├─ aside.css
│  ├─ recommend.css
│  └─ footer.css
│
├─ js/
│  ├─ layout.js            ← 注入 layouts 组件
│  ├─ i18n.js              ← 语言切换
│  └─ toc.js               ← 目录面板逻辑
│
├─ index.html              ← 首页（只写 main 内容）
└─ about.html              ← 关于页（只写 main 内容）



<!-- #新页面模板 -->

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-i18n="meta.title">页面标题</title>
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/header.css">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/article.css">
  <link rel="stylesheet" href="/css/aside.css">
  <link rel="stylesheet" href="/css/recommend.css">
  <link rel="stylesheet" href="/css/footer.css">
</head>

<!-- 告诉 i18n.js 加载哪个页面包 -->
<body data-page="page-name"> 

  <!-- 组件占位符，layout.js 会替换这些元素 -->
  <div id="layout-header"></div>

  <main>
    <!-- ✏️ 只需修改这里的文章内容 -->
    <article id="chap1">
      <h2 data-i18n="a1.title"></h2>
      <p class="meta" data-i18n="a1.meta"></p>
      <p data-i18n="a1.intro"></p>
      <!-- 语音播放条 -->
      <audio class="article-audio" controls preload="metadata" controls controlslist="nodownload">
        <source src="../assets/audio/yangxianyi.mp3" type="audio/mpeg">
      </audio>

      <!-- 文中图片 + 图注 -->
      <figure class="article-figure">
          <img class="portrait" src="../assets/image图1：图1s/杨仙逸.webp" alt="语义化标签结构示意图" loading="lazy">
          <figcaption data-i18n="a1.s1.fig1"></figcaption>
      </figure>

      <section id="chap1-1">
        <h3 data-i18n="a1.s1.title"></h3>
        <ul>
          <li data-i18n-html="a1.s1.li1"></li>
          <li data-i18n-html="a1.s1.li2"></li>
        </ul>
      </section></article>
  </main>

  <div id="layout-recommend"></div>
  <div id="layout-toc"></div>
  <div id="layout-footer"></div>

  <script type="module">
    import { initLayout } from '/js/layout.js';
    import { initI18n }   from '/js/i18n.js';
    import { initToc }    from '/js/toc.js';

    // 顺序：先注入组件 → 再初始化语言 → 再生成目录
    await initLayout();
    await initI18n();
    initToc();
  </script>
</body>
</html>


//新页面语言包
{
  "meta": { "title": "首页" },
  "a1": { "title": "语义化标签使用指南", "intro": "..." },
  "recommend": {
    "r1": { "tag": "CSS 布局", "title": "CSS Grid 完全指南", "desc": "..." },
    "r2": { "tag": "无障碍",  "title": "Web 无障碍设计入门", "desc": "..." }
  }
}


// i18n.js
// 从 HTML 的 data-page 属性读取当前页面名称
// <body data-page="index">
async function loadLocale(lang) {
  const page = document.body.dataset.page;
  const [common, pageData] = await Promise.all([
    fetch(`/locales/common/${lang}.json`).then(r => r.json()),
    fetch(`/locales/${page}/${lang}.json`).then(r => r.json()),
  ]);
  // 页面包覆盖公共包（同 key 时页面优先）
  return { ...common, ...pageData };
}

