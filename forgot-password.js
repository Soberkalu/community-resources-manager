const forgotForm = document.getElementById('forgotForm');
const message = document.getElementById('message');

forgotForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  // For now, we just simulate a successful reset request
  if(email) {
    message.textContent = `A password reset link has been sent to ${email}.`;
    forgotForm.reset();
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = 'red';
  }
});
