import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const [email, message] = formRef;

const KEY = 'feedback-form-state';

const checkLocalStorage = () => {
  const objOfKey = JSON.parse(localStorage.getItem(KEY));

  if (localStorage.getItem(KEY)) {
    email.value = objOfKey.email;
    message.value = objOfKey.message;
  }
};

const checkInputForm = e => {
  const {
    target: { name, value },
  } = e;

  if (name === 'email')
    localStorage.setItem(
      KEY,
      JSON.stringify({ email: value, message: message.value })
    );

  if (name === 'message')
    localStorage.setItem(
      KEY,
      JSON.stringify({ email: email.value, message: value })
    );
};

const submitForm = e => {
  e.preventDefault();

  e.target.reset();

  console.log(JSON.parse(localStorage.getItem(KEY)));

  localStorage.removeItem(KEY);
};

checkLocalStorage();

formRef.addEventListener('input', throttle(checkInputForm, 500));

formRef.addEventListener('submit', submitForm);
