const header = document.getElementById('header');
const menu = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 25));
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
