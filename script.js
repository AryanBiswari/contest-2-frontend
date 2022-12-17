
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');


const emailErrorElement = document.getElementById('email-error');
const passwordErrorElement = document.getElementById('password-error');
const successMessageElement = document.getElementById('success-message');


emailInput.addEventListener('change', () => {
  const email = emailInput.value;
  if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
    emailErrorElement.textContent = 'Make sure email is more than 3 characters and has @ and a .';
    successMessageElement.style.display = 'none';
  } else {
    emailErrorElement.textContent = '';
    successMessageElement.textContent = 'All good to go';
    successMessageElement.style.display = 'block';
  }

});


passwordInput.addEventListener('change', () => {
    const password = passwordInput.value;

  if (password.length < 8) {
    passwordErrorElement.textContent = 'Make sure password is more than 8 characters';
    successMessageElement.style.display = 'none';
  } else {
    passwordErrorElement.textContent = '';
    successMessageElement.textContent = 'All good to go';
    successMessageElement.style.display = 'block';
  }
});



submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const password = passwordInput.value;
  const email = emailInput.value;
  if(password.length == 0 && email.length == 0) {
    alert('Please enter your email and password')
  }
  else if (email.length >= 3 && email.includes('@') && email.includes('.') && password.length >= 8){
    const result = confirm('Are you sure you want to submit the form?')
    if(result){
        alert('Successful signup!');
        emailInput.value = '';
        passwordInput.value = '';
    }else{
        emailInput.value = '';
        passwordInput.value = '';
    }
  }
  else{
    alert('Please enter a valid email address and password')
  }
});
