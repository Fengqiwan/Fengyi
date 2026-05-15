// 自动生成目录
export function initToc() {
  const nav = document.getElementById('tocNav');
  if (!nav) return;

  // 不足2个article就隐藏整个目录
  const articles = document.querySelectorAll('main > article');
  if(articles.length < 2) {
    document.getElementById('tocPanel')?.style.setProperty('display', 'none');
    document.getElementById('tocToggle')?.style.setProperty('display', 'none');
    return;
  }

  const ul = document.createElement('ul');
  document.querySelectorAll('main > article').forEach(article => {
    const li = document.createElement('li');
    li.className = 'toc-chapter';
    const h2 = article.querySelector('h2');
    li.innerHTML = `<a href="#${article.id}" data-i18n="${h2?.dataset.i18n || ''}">${h2?.textContent || ''}</a>`;

    const subUl = document.createElement('ul');
    article.querySelectorAll('section').forEach(sec => {
      const h3 = sec.querySelector('h3');
      const subLi = document.createElement('li');
      subLi.innerHTML = `<a href="#${sec.id}" data-i18n="${h3?.dataset.i18n || ''}">${h3?.textContent || ''}</a>`;
      subUl.appendChild(subLi);
    });
    if (subUl.children.length) li.appendChild(subUl);
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  document.getElementById('tocToggle').addEventListener('click', () => {
    document.getElementById('tocPanel').classList.toggle('open');
  });
}
