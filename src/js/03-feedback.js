import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const obj = {};

const checkInputForm = e => {
  if (e.target.name === 'email') {
    obj.email = e.target.value;
  }
  if (e.target.name === 'message') {
    obj.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

refs.form.addEventListener('input', throttle(checkInputForm, 500));

const submitForm = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');

  e.target.reset();
};
refs.form.addEventListener('submit', submitForm);

const checkLocalStorage = () => {
  const feedbackToObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  const [email, message] = refs.form;

  if (feedbackToObj) email.value = feedbackToObj.email;
  if (feedbackToObj) message.value = feedbackToObj.message;
};

checkLocalStorage();
