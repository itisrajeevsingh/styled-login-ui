// VIEW SWITCHING
const forgotLink = document.getElementById("forgotLink");
const backToLogin = document.getElementById("backToLogin");

const loginView = document.getElementById("loginView");
const resetView = document.getElementById("resetView");

forgotLink.addEventListener("click", function(e) {
  e.preventDefault();
  loginView.classList.add("hidden");
  resetView.classList.remove("hidden");
});

backToLogin.addEventListener("click", function(e) {
  e.preventDefault();
  resetView.classList.add("hidden");
  loginView.classList.remove("hidden");
});

// LOGIN VALIDATION
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  loginError.textContent = "";

  if (!email.match(emailPattern)) {
    loginError.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    loginError.textContent = "Password must be at least 6 characters.";
    return;
  }

  loginError.style.color = "green";
  loginError.textContent = "Login successful!";
});

// RESET PASSWORD
const resetForm = document.getElementById("resetForm");
const resetMessage = document.getElementById("resetMessage");

resetForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const resetEmail = document.getElementById("resetEmail").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  resetMessage.textContent = "";

  if (!resetEmail.match(emailPattern)) {
    resetMessage.textContent = "Please enter a valid email address.";
    return;
  }

  resetMessage.style.color = "green";
  resetMessage.textContent = "Reset link sent successfully! Check your email.";
});

// SHOW / HIDE PASSWORD
const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
