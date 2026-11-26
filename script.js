const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const requestSelect = document.querySelector('[name="request"]');
const selectedPackage = new URLSearchParams(window.location.search).get('package');

if (requestSelect && selectedPackage) {
  requestSelect.value = selectedPackage;
}

document.querySelectorAll('.package-choice').forEach((link) => {
  link.addEventListener('click', () => {
    requestSelect.value = link.dataset.package;
  });
});

document.querySelector('[data-lead-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'Форма записи подключается. Пока не отправляйте персональные данные через эту страницу.';
});
