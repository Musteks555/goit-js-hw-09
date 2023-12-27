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

  if (
    event.target.elements.email.value.trim() !== '' &&
    event.target.elements.message.value.trim() !== ''
  ) {
    console.log(inputs);

    localStorage.removeItem(localStorageKey);

    Object.keys(inputs).forEach(key => {
      inputs[key] = '';
    });

    event.currentTarget.reset();
  } else if (event.target.elements.email.value.trim() !== '') {
    event.target.elements.message.focus();
  } else if (event.target.elements.message.value.trim() !== '') {
    event.target.elements.email.focus();
  }
});
