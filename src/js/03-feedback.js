import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const updateFormState = throttle(() => {
  const formState = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
};

form.addEventListener('input', updateFormState);
form.addEventListener('submit', event => {
  event.preventDefault();
  const formState = { email: emailInput.value, message: messageInput.value };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

loadFormState();
