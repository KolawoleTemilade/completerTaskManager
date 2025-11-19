
const loginContainer = document.querySelector('.login_container');
const signupContainer = document.querySelector('.signup_container');

const toSignupBtn = document.getElementById('toSignup');
const toLoginBtn = document.getElementById('toLogin');

// SHOW SIGNUP SCREEN
if (toSignupBtn) {
  toSignupBtn.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
  });
}

// SHOW LOGIN SCREEN
if (toLoginBtn) {
  toLoginBtn.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });
}