const body = document.body;
const languageToggle = document.querySelector('#language-toggle');
const themeToggle = document.querySelector('#theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

const savedLanguage = localStorage.getItem('profile-language');
const savedTheme = localStorage.getItem('profile-theme');

if (savedLanguage === 'en') body.classList.add('is-en');
if (savedTheme === 'dark') body.classList.add('dark');

languageToggle?.addEventListener('click', () => {
  const isEnglish = body.classList.toggle('is-en');
  localStorage.setItem('profile-language', isEnglish ? 'en' : 'zh');
  languageToggle.setAttribute('aria-label', isEnglish ? 'Switch to Chinese' : '切换为英文');
});

themeToggle?.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('profile-theme', isDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
});

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
