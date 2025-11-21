
const loginContainer = document.querySelector('.login_container');
const signupContainer = document.querySelector('.signup_container');

const toSignupBtn = document.getElementById('toSignup');
const toLoginBtn = document.getElementById('toLogin');

function setActiveTab(activeButton, inactiveButton) {
  activeButton.classList.add('active-tab');
  inactiveButton.classList.remove('active-tab');
}

if (toLoginBtn && toSignupBtn) {
    setActiveTab(toLoginBtn, toSignupBtn); 
}
// SHOW LOGIN SCREEN
if (toLoginBtn) {
  toLoginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    setActiveTab(toLoginBtn, toSignupBtn);
  });
}

// SHOW SIGNUP SCREEN
if (toSignupBtn) {
  toSignupBtn.addEventListener('click', (e) => {
    e.preventDefault()
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'flex';

    setActiveTab(toSignupBtn, toLoginBtn);
  });
}

