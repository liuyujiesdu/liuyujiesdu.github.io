(() => {
  const root = document.documentElement;
  const languageButton = document.querySelector('#language-toggle');
  const themeButton = document.querySelector('#theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  const storedLanguage = localStorage.getItem('homepage-language');
  const initialLanguage = storedLanguage === 'en' ? 'en' : 'zh';
  root.dataset.language = initialLanguage;
  root.lang = initialLanguage === 'en' ? 'en' : 'zh-CN';

  const storedTheme = localStorage.getItem('homepage-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const initialTheme = storedTheme || preferredTheme;
  root.dataset.theme = initialTheme;

  function syncThemeUI() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
    themeMeta.setAttribute('content', dark ? '#0e1622' : '#f7f9fc');
  }

  function syncLanguageUI() {
    const english = root.dataset.language === 'en';
    languageButton.setAttribute('aria-label', english ? '切换为中文' : 'Switch to English');
    menuButton.setAttribute('aria-label', english ? 'Open navigation menu' : '打开导航菜单');
    document.title = english ? 'Yujie “Jie” Liu | Academic Homepage' : '刘宇杰（Jie）| Academic Homepage';
  }

  languageButton.addEventListener('click', () => {
    const next = root.dataset.language === 'zh' ? 'en' : 'zh';
    root.dataset.language = next;
    root.lang = next === 'en' ? 'en' : 'zh-CN';
    localStorage.setItem('homepage-language', next);
    syncLanguageUI();
  });

  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('homepage-theme', next);
    syncThemeUI();
  });

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] });

  sections.forEach((section) => observer.observe(section));
  document.querySelector('#year').textContent = new Date().getFullYear();
  syncThemeUI();
  syncLanguageUI();
})();
