document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  })

  const usernameInput = document.getElementById('username').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value.trim();

  let isValid = true;
  let messages = [];

  if (usernameInput.length < 3) {
    isValid = false;
    messages.push('username needs to be more than 3 characters long.')
  }

  if (!emailInput.includes('@') || !emailInput.includes('.') ) {
    isValid = false;
    messages.push('email is not valid.')
  }

  if (passwordInput.length < 8) {
    isValid = false;
    messages.push('password is too short!')
  }

  feedbackDiv.style.display = "block";
  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"
  } else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = "#dc3545"
  }
})
