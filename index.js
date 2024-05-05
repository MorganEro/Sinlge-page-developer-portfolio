// Path: index.js
const form = document.querySelector('.contact-form'),
  nameInput = document.querySelector('input[type="text"]'),
  nameError = document.querySelector('.name-error'),
  nameErrorSymbol = document.querySelector('.name-error-symbol'),
  emailInput = document.querySelector('input[type="email"]'),
  emailError = document.querySelector('.email-error'),
  emailErrorSymbol = document.querySelector('.email-error-symbol'),
  messageInput = document.getElementById('message'),
  messageError = document.querySelector('.message-error'),
  messageErrorSymbol = document.querySelector('.message-error-symbol');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (nameInput.value === '') {
    nameError.style.display = 'block';
    nameErrorSymbol.style.display = 'flex';
    nameInput.classList.add('invalid');
  } else {
    nameError.style.display = 'none';
    nameErrorSymbol.style.display = 'none';
    nameInput.classList.remove('invalid');
  }

  if (emailInput.value === '') {
    emailError.style.display = 'block';
    emailErrorSymbol.style.display = 'flex';
    emailInput.classList.add('invalid');
  } else {
    emailError.style.display = 'none';
    emailErrorSymbol.style.display = 'none';
    emailInput.classList.remove('invalid');
  }

  if (messageInput.value === '') {
    messageError.style.display = 'block';
    messageErrorSymbol.style.display = 'flex';
    messageInput.classList.add('invalid');
  } else {
    messageError.style.display = 'none';
    messageErrorSymbol.style.display = 'none';
    messageInput.classList.remove('invalid');
  }
});

emailInput.addEventListener('invalid', e => {
  e.preventDefault();
  emailError.style.display = 'block';
  emailErrorSymbol.style.display = 'flex';
  emailInput.classList.add('invalid');
});
