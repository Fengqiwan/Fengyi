// 把 layouts 里的 HTML 片段注入到页面对应占位符
async function injectLayout(selector, file) {
  const res = await fetch(`../layouts/${file}`);
  const html = await res.text();
  document.querySelector(selector).outerHTML = html;
}

export async function initLayout() {
  await Promise.all([
    injectLayout('#layout-header', 'header.html'),
    injectLayout('#layout-footer', 'footer.html'),
    injectLayout('#layout-toc', 'toc-panel.html'),
    injectLayout('#layout-recommend', 'recommend.html'),
  ]);
}
