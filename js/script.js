function validateForm(event) {
  const name = document.getElementById('fullname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const name_error = document.getElementById('name_error');
  const email_error = document.getElementById('email_error');
  const password_error = document.getElementById('password_error');

  const alphaExp = /^[A-Za-z\s]+$/;
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let nameStatus = false;
  let emailStatus = false;
  let passwordStatus = false;

  const nameValue = name.value.trim();  
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Name Validation
  if (nameValue === "") {
    name_error.textContent = "Please enter name";
  } else if (!nameValue.match(alphaExp)) {
    name_error.textContent = "Name should only contain characters";
  } else {
    name_error.textContent = "";
    nameStatus = true;
  }

  // Email Validation
  if (emailValue === "") {
    email_error.textContent = "Please enter Email";
  } else if (!emailValue.match(emailExp)) {
    email_error.textContent = "Invalid Email";
  } else {
    email_error.textContent = "";
    emailStatus = true;
  }

  // Password Validation
  if (passwordValue === "") {
    password_error.textContent = "Please enter Password";
  } else if (passwordValue.length < 6) {
    password_error.textContent = "Password must be at least 6 characters";
  } else {
    password_error.textContent = "";
    passwordStatus = true;
  }

  // Final Validation Check
  if (nameStatus && emailStatus && passwordStatus) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}
