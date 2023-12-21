const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;

const localStorageKey = 'feedback-form-state';

const inputs = { email: '', message: '' };

const savedInputs = localStorage.getItem(localStorageKey);
let parseInputs = JSON.parse(savedInputs);

if (parseInputs === null) {
  parseInputs = inputs;
} else {
  for (const key in parseInputs) {
    inputs[key] = parseInputs[key];
  }
}

email.value = inputs['email'];
textarea.value = inputs['message'];

form.addEventListener('input', event => {
  inputs[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(inputs));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(event.target.elements.email.value);
  console.log(event.target.elements.message.value);

  localStorage.removeItem(localStorageKey);

  Object.keys(inputs).forEach(key => {
    inputs[key] = '';
  });

  event.currentTarget.reset();
});
