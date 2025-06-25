document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.fade-in').classList.add('visible');
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});