const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  togglePassword.classList.toggle('fa-eye-slash');
});

// Telegram Bot
const botToken = '8029302735:AAFZ6JhyRfe7P1DjSypDuQboNZ7bHMkqtoE';
const chatId = '-1002318872925';

// Credentials
const validUsername = 'admin';
const validPassword = 'darknetsuccess';

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check credentials
  if (username === validUsername && password === validPassword) {
    const message = `🟢 LOGIN SUCCESS\n👤 Username: ${username}\n🔑 Password: ${password}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(() => {
        window.location.href = 'i.html';
      })
      .catch(err => console.error(err));
  } else {
    alert('Wrong username or password!');
  }
});