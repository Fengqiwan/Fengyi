/* ==============================================
   多语言翻译数据
   
   结构：i18n[语言代码][翻译键] = 翻译文本
   
   HTML 中通过两种属性标记需要翻译的元素：
   · data-i18n="key"       → 替换 textContent（纯文本）
   · data-i18n-html="key"  → 替换 innerHTML（含HTML标签，如<strong>）
   ============================================== */

const i18n = {

    /* ========== 中文 ========== */
    zh: {
        site_name: '测试站点',

        // 文章1
        a1_title: '语义化标签使用指南',
        a1_meta: '2026-05-12 · 前端开发 · 阅读约5分钟',
        a1_intro: 'HTML5 引入了大量语义化标签，它们让文档结构更清晰、可访问性更好、SEO 更友好。下面是各标签的核心作用：',
        a1_s1_title: '块级语义标签一览',
        a1_s1_li1: '<strong>header</strong> — 页面或区块的头部',
        a1_s1_li2: '<strong>nav</strong> — 导航链接集合',
        a1_s1_li3: '<strong>main</strong> — 页面主体内容（唯一）',
        a1_s1_li4: '<strong>article</strong> — 独立的内容单元',
        a1_s1_li5: '<strong>section</strong> — 主题性分组',
        a1_s1_li6: '<strong>aside</strong> — 侧边补充内容',
        a1_s1_li7: '<strong>footer</strong> — 页面或区块的底部',
        a1_s2_title: '为什么不用 div 替代？',
        a1_s2_li1: '屏幕阅读器能识别语义标签，提升无障碍体验',
        a1_s2_li2: '搜索引擎能更准确理解内容结构',
        a1_s2_li3: '代码可读性和可维护性大幅提升',

        // 文章2
        a2_title: 'Flexbox 布局实战技巧',
        a2_meta: '2026-05-10 · CSS布局 · 阅读约3分钟',
        a2_intro: 'Flexbox 是现代 CSS 布局的核心工具，掌握以下属性组合可以解决 90% 的布局需求。',
        a2_s1_title: '常用属性速查',
        a2_s1_li1: '<strong>flex: 1</strong> — 自动填充剩余空间',
        a2_s1_li2: '<strong>align-items: stretch</strong> — 子项等高',
        a2_s1_li3: '<strong>min-width: 0</strong> — 允许内容收缩',
        a2_s1_li4: '<strong>flex-shrink: 0</strong> — 禁止被压缩',
        a2_s1_li5: '<strong>gap</strong> — 替代margin实现间距',
        a2_s2_title: '实战案例分析',
        a2_s2_p1: '在页尾布局中，我们使用 flex + stretch 实现左右等高，用 flex-shrink:0 保护二维码不被压缩，用 min-width:0 + overflow-wrap 防止极窄屏溢出。这些技巧的组合使用是 Flexbox 的精髓所在。',
        a2_s2_p2: '合理组合这些属性，配合媒体查询实现响应式，可以覆盖绝大多数业务场景。关键是理解每个属性的作用原理，而非死记硬背。',

        // 文章3
        a3_title: '响应式设计核心原则',
        a3_meta: '2026-05-08 · 响应式 · 阅读约4分钟',
        a3_intro: '响应式设计的目标是让网页在任何设备上都能提供良好的用户体验，从320px的小屏手机到2560px的超宽显示器。',
        a3_s1_title: '移动优先策略',
        a3_s1_p1: '移动优先（Mobile First）意味着先编写移动端样式作为基础，然后通过 min-width 媒体查询逐步增强桌面端体验。这种方式确保了核心内容在任何设备上都可访问。',
        a3_s1_li1: '基础样式 → 适用于所有屏幕',
        a3_s1_li2: '@media (min-width: 768px) → 平板及以上增强',
        a3_s1_li3: '@media (min-width: 1024px) → 桌面端完整体验',
        a3_s2_title: '断点选择与内容适配',
        a3_s2_p1: '断点不应该根据特定设备选择，而应该根据内容何时"断裂"来决定。当内容在某个宽度下开始显示不佳时，就是设置断点的时机。',
        a3_s2_p2: '常用断点参考：480px（大屏手机）、768px（平板）、1024px（小型桌面）、1200px（标准桌面）。但这些只是参考，实际项目应根据设计稿和内容灵活调整。',

        // 目录面板
        toc_title: '📑 章节目录',
        toc_a1: '一、语义化标签使用指南',
        toc_a1_s1: '1.1 块级语义标签一览',
        toc_a1_s2: '1.2 为什么不用div替代？',
        toc_a2: '二、Flexbox布局实战',
        toc_a2_s1: '2.1 常用属性速查',
        toc_a2_s2: '2.2 实战案例分析',
        toc_a3: '三、响应式设计原则',
        toc_a3_s1: '3.1 移动优先策略',
        toc_a3_s2: '3.2 断点选择与适配',

        // 页尾
        footer_name: '测试站点',
        footer_intro: '这是一个用于测试 HTML5 语义化标签布局效果的演示页面。所有模块均使用语义化标签构建，配合 Flexbox 实现响应式布局。',
        footer_addr: '📍 地址：广东省深圳市南山区科技园XX大厦',
        footer_phone: '📞 电话：400-123-4567',
        footer_email: '📧 邮箱：contact@testsite.com',
        footer_qr_tip: '关注我们！',
        footer_copyright: '© 2026 测试站点 · 语义化标签布局测试'
    },

    /* ========== English ========== */
    en: {
        site_name: 'Test Site',

        a1_title: 'Guide to Semantic HTML Tags',
        a1_meta: '2026-05-12 · Frontend Dev · ~5 min read',
        a1_intro: 'HTML5 introduced many semantic tags that make document structure clearer, improve accessibility, and boost SEO. Here are the core roles of each tag:',
        a1_s1_title: 'Block-level Semantic Tags',
        a1_s1_li1: '<strong>header</strong> — Head of page or section',
        a1_s1_li2: '<strong>nav</strong> — Navigation link collection',
        a1_s1_li3: '<strong>main</strong> — Main page content (unique)',
        a1_s1_li4: '<strong>article</strong> — Independent content unit',
        a1_s1_li5: '<strong>section</strong> — Thematic grouping',
        a1_s1_li6: '<strong>aside</strong> — Supplementary side content',
        a1_s1_li7: '<strong>footer</strong> — Bottom of page or section',
        a1_s2_title: 'Why Not Use div Instead?',
        a1_s2_li1: 'Screen readers recognize semantic tags for better accessibility',
        a1_s2_li2: 'Search engines understand content structure more accurately',
        a1_s2_li3: 'Code readability and maintainability are greatly improved',

        a2_title: 'Flexbox Layout Practical Techniques',
        a2_meta: '2026-05-10 · CSS Layout · ~3 min read',
        a2_intro: 'Flexbox is the core tool for modern CSS layout. Mastering these property combinations solves 90% of layout needs.',
        a2_s1_title: 'Common Properties Quick Reference',
        a2_s1_li1: '<strong>flex: 1</strong> — Auto-fill remaining space',
        a2_s1_li2: '<strong>align-items: stretch</strong> — Equal height children',
        a2_s1_li3: '<strong>min-width: 0</strong> — Allow content shrinking',
        a2_s1_li4: '<strong>flex-shrink: 0</strong> — Prevent compression',
        a2_s1_li5: '<strong>gap</strong> — Replace margin for spacing',
        a2_s2_title: 'Practical Case Analysis',
        a2_s2_p1: 'In the footer layout, we use flex + stretch for equal height, flex-shrink:0 to protect the QR code from compression, and min-width:0 + overflow-wrap to prevent narrow-screen overflow.',
        a2_s2_p2: 'Combining these properties with media queries covers most business scenarios. The key is understanding each property\'s principle, not memorizing.',

        a3_title: 'Core Principles of Responsive Design',
        a3_meta: '2026-05-08 · Responsive · ~4 min read',
        a3_intro: 'The goal of responsive design is to provide a good user experience on any device, from 320px phones to 2560px ultrawide monitors.',
        a3_s1_title: 'Mobile-First Strategy',
        a3_s1_p1: 'Mobile-first means writing mobile styles as the base, then progressively enhancing for desktop via min-width media queries. This ensures core content is accessible on any device.',
        a3_s1_li1: 'Base styles → Apply to all screens',
        a3_s1_li2: '@media (min-width: 768px) → Tablet and above enhancements',
        a3_s1_li3: '@media (min-width: 1024px) → Full desktop experience',
        a3_s2_title: 'Breakpoint Selection & Content Adaptation',
        a3_s2_p1: 'Breakpoints should be based on when content "breaks", not specific devices. When content starts looking bad at a certain width, that\'s when to set a breakpoint.',
        a3_s2_p2: 'Common breakpoints: 480px (large phone), 768px (tablet), 1024px (small desktop), 1200px (standard desktop). These are references — adjust flexibly based on your design.',

        toc_title: '📑 Chapters',
        toc_a1: '1. Semantic HTML Tags Guide',
        toc_a1_s1: '1.1 Block-level Semantic Tags',
        toc_a1_s2: '1.2 Why Not Use div?',
        toc_a2: '2. Flexbox Layout Techniques',
        toc_a2_s1: '2.1 Common Properties Reference',
        toc_a2_s2: '2.2 Practical Case Analysis',
        toc_a3: '3. Responsive Design Principles',
        toc_a3_s1: '3.1 Mobile-First Strategy',
        toc_a3_s2: '3.2 Breakpoint Selection',

        footer_name: 'Test Site',
        footer_intro: 'This is a demo page for testing HTML5 semantic tag layout. All modules are built with semantic tags and Flexbox responsive layout.',
        footer_addr: '📍 Address: XX Building, Tech Park, Nanshan, Shenzhen, China',
        footer_phone: '📞 Phone: +86 400-123-4567',
        footer_email: '📧 Email: contact@testsite.com',
        footer_qr_tip: 'Follow Us!',
        footer_copyright: '© 2026 Test Site · Semantic Tag Layout Demo'
    },

    /* ========== 한국어 ========== */
    ko: {
        site_name: '테스트 사이트',

        a1_title: '시맨틱 태그 사용 가이드',
        a1_meta: '2026-05-12 · 프론트엔드 개발 · 약 5분 읽기',
        a1_intro: 'HTML5는 문서 구조를 더 명확하게 하고 접근성과 SEO를 개선하는 다양한 시맨틱 태그를 도입했습니다. 각 태그의 핵심 역할은 다음과 같습니다:',
        a1_s1_title: '블록 레벨 시맨틱 태그 목록',
        a1_s1_li1: '<strong>header</strong> — 페이지 또는 섹션의 머리글',
        a1_s1_li2: '<strong>nav</strong> — 내비게이션 링크 모음',
        a1_s1_li3: '<strong>main</strong> — 페이지 주요 콘텐츠 (유일)',
        a1_s1_li4: '<strong>article</strong> — 독립적인 콘텐츠 단위',
        a1_s1_li5: '<strong>section</strong> — 주제별 그룹화',
        a1_s1_li6: '<strong>aside</strong> — 보충 콘텐츠',
        a1_s1_li7: '<strong>footer</strong> — 페이지 또는 섹션의 바닥글',
        a1_s2_title: 'div 대신 사용하는 이유',
        a1_s2_li1: '스크린 리더가 시맨틱 태그를 인식하여 접근성 향상',
        a1_s2_li2: '검색 엔진이 콘텐츠 구조를 더 정확하게 이해',
        a1_s2_li3: '코드 가독성과 유지보수성 대폭 향상',

        a2_title: 'Flexbox 레이아웃 실전 기법',
        a2_meta: '2026-05-10 · CSS 레이아웃 · 약 3분 읽기',
        a2_intro: 'Flexbox는 현대 CSS 레이아웃의 핵심 도구입니다. 다음 속성 조합으로 90%의 레이아웃을 해결할 수 있습니다.',
        a2_s1_title: '자주 사용하는 속성 빠른 참조',
        a2_s1_li1: '<strong>flex: 1</strong> — 남은 공간 자동 채우기',
        a2_s1_li2: '<strong>align-items: stretch</strong> — 자식 요소 동일 높이',
        a2_s1_li3: '<strong>min-width: 0</strong> — 콘텐츠 축소 허용',
        a2_s1_li4: '<strong>flex-shrink: 0</strong> — 압축 방지',
        a2_s1_li5: '<strong>gap</strong> — margin 대신 간격 설정',
        a2_s2_title: '실전 사례 분석',
        a2_s2_p1: '푸터 레이아웃에서 flex + stretch로 좌우 동일 높이를 구현하고, flex-shrink:0으로 QR코드를 보호하며, min-width:0 + overflow-wrap으로 극소 화면 오버플로우를 방지합니다.',
        a2_s2_p2: '이러한 속성을 미디어 쿼리와 결합하면 대부분의 비즈니스 시나리오를 커버할 수 있습니다. 핵심은 각 속성의 원리를 이해하는 것입니다.',

        a3_title: '반응형 디자인 핵심 원칙',
        a3_meta: '2026-05-08 · 반응형 · 약 4분 읽기',
        a3_intro: '반응형 디자인의 목표는 320px 소형 스마트폰부터 2560px 초광폭 모니터까지 모든 기기에서 좋은 사용자 경험을 제공하는 것입니다.',
        a3_s1_title: '모바일 퍼스트 전략',
        a3_s1_p1: '모바일 퍼스트는 모바일 스타일을 기본으로 작성한 후 min-width 미디어 쿼리로 데스크톱을 점진적으로 개선하는 것입니다. 이 방식은 핵심 콘텐츠가 모든 기기에서 접근 가능하도록 보장합니다.',
        a3_s1_li1: '기본 스타일 → 모든 화면에 적용',
        a3_s1_li2: '@media (min-width: 768px) → 태블릿 이상 개선',
        a3_s1_li3: '@media (min-width: 1024px) → 데스크톱 완전한 경험',
        a3_s2_title: '브레이크포인트 선택과 콘텐츠 적응',
        a3_s2_p1: '브레이크포인트는 특정 기기가 아닌 콘텐츠가 "깨지는" 시점에 따라 결정해야 합니다. 특정 너비에서 콘텐츠가 보기 나빠지기 시작하면 그때가 브레이크포인트를 설정할 시점입니다.',
        a3_s2_p2: '일반적인 브레이크포인트: 480px(대형폰), 768px(태블릿), 1024px(소형 데스크톱), 1200px(표준 데스크톱). 이는 참고일 뿐이며 디자인에 따라 유연하게 조정하세요.',

        toc_title: '📑 목차',
        toc_a1: '1. 시맨틱 태그 가이드',
        toc_a1_s1: '1.1 블록 시맨틱 태그 목록',
        toc_a1_s2: '1.2 div 대신 사용하는 이유',
        toc_a2: '2. Flexbox 레이아웃 기법',
        toc_a2_s1: '2.1 자주 사용하는 속성',
        toc_a2_s2: '2.2 실전 사례 분석',
        toc_a3: '3. 반응형 디자인 원칙',
        toc_a3_s1: '3.1 모바일 퍼스트 전략',
        toc_a3_s2: '3.2 브레이크포인트 선택',

        footer_name: '테스트 사이트',
        footer_intro: 'HTML5 시맨틱 태그 레이아웃 효과를 테스트하기 위한 데모 페이지입니다. 모든 모듈은 시맨틱 태그와 Flexbox 반응형 레이아웃으로 구축되었습니다.',
        footer_addr: '📍 주소: 중국 심천시 난산구 테크파크 XX빌딩',
        footer_phone: '📞 전화: +86 400-123-4567',
        footer_email: '📧 이메일: contact@testsite.com',
        footer_qr_tip: '팔로우하세요!',
        footer_copyright: '© 2026 테스트 사이트 · 시맨틱 태그 레이아웃 데모'
    }
};


/* ==============================================
   语言切换核心函数
   
   工作流程：
   1. 根据语言代码从 i18n 对象取出对应翻译表
   2. 更新 <html lang> 属性（影响屏幕阅读器和搜索引擎）
   3. 遍历所有 [data-i18n] 元素，替换 textContent
   4. 遍历所有 [data-i18n-html] 元素，替换 innerHTML
   5. 更新语言按钮的选中状态（.active 类）
   6. 更新页面标题
   7. 关闭弹出浮窗
   ============================================== */

let currentLang = 'zh';

function applyLanguage(lang) {
    currentLang = lang;
    const data = i18n[lang];
    if (!data) return;

    // 步骤1：更新 html lang 属性
    const langMap = { zh: 'zh-CN', en: 'en', ko: 'ko' };
    document.documentElement.lang = langMap[lang] || lang;

    // 步骤2：替换所有 data-i18n 元素的纯文本
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (data[key] !== undefined) {
            el.textContent = data[key];
        }
    });

    // 步骤3：替换所有 data-i18n-html 元素的 HTML 内容
    // 用于包含 <strong> 等标签的列表项
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-html');
        if (data[key] !== undefined) {
            el.innerHTML = data[key];
        }
    });

    // 步骤4：更新语言按钮的 .active 状态
    document.querySelectorAll('.lang-option').forEach(function(btn) {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 步骤5：更新页面标题
    document.title = data.site_name || document.title;

    // 步骤6：关闭语言弹窗
    langPopup.classList.remove('show');
}


/* ==============================================
   语言弹窗交互
   
   点击 🌐 按钮 → 切换弹窗显示/隐藏
   点击语言选项 → 执行切换 + 关闭弹窗
   点击页面其他位置 → 关闭弹窗
   ============================================== */

var langBtn = document.getElementById('langBtn');
var langPopup = document.getElementById('langPopup');

langBtn.addEventListener('click', function(e) {
    // stopPropagation 阻止事件冒泡到 document
    // 否则会立即触发 document 的 click 监听，把刚打开的弹窗关掉
    e.stopPropagation();
    langPopup.classList.toggle('show');
    // 同时关闭目录面板（互斥）
    tocPanel.classList.remove('show');
    tocToggle.classList.remove('active');
});

// 给每个语言选项绑定点击事件
document.querySelectorAll('.lang-option').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        applyLanguage(lang);
    });
});


/* ==============================================
   目录面板交互
   
   点击 📑 按钮 → 切换面板显示/隐藏
   点击目录链接 → 关闭面板 + 浏览器自动滚动到锚点
   点击页面其他位置 → 关闭面板
   ============================================== */

var tocToggle = document.getElementById('tocToggle');
var tocPanel = document.getElementById('tocPanel');

tocToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    tocPanel.classList.toggle('show');
    tocToggle.classList.toggle('active');
    // 同时关闭语言弹窗（互斥）
    langPopup.classList.remove('show');
});

// 目录内链接点击后自动关闭面板
// 浏览器会根据 href="#xxx" 自动执行锚点滚动（配合 CSS scroll-behavior: smooth）
tocPanel.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        tocPanel.classList.remove('show');
        tocToggle.classList.remove('active');
    });
});


/* ==============================================
   点击外部关闭所有弹出层
   
   原理：事件冒泡
   · 点击弹窗内部 → 被 stopPropagation 拦截，不会到达 document
   · 点击弹窗外部 → 事件冒泡到 document → 执行关闭逻辑
   
   判断条件：
   · 点击目标不在 langBtn 内，也不在 langPopup 内 → 关闭语言弹窗
   · 点击目标不在 tocToggle 内，也不在 tocPanel 内 → 关闭目录面板
   ============================================== */

document.addEventListener('click', function(e) {
    // 关闭语言弹窗
    if (!langBtn.contains(e.target) && !langPopup.contains(e.target)) {
        langPopup.classList.remove('show');
    }
    // 关闭目录面板
    if (!tocToggle.contains(e.target) && !tocPanel.contains(e.target)) {
        tocPanel.classList.remove('show');
        tocToggle.classList.remove('active');
    }
});
