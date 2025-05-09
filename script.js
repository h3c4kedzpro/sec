const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

// Dummy data for username and password validation
const validUsername = 'admin';
const validPassword = 'darknet'; // Replace this with secure methods in real applications

const botToken = '8029302735:AAFZ6JhyRfe7P1DjSypDuQboNZ7bHMkqtoE'; // Replace with your real bot token
const chatId = '-1002318872925'; // Replace with your real channel chat ID

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match the dummy data
  if (username === validUsername && password === validPassword) {
    // Send log to Telegram channel if login is successful
    const message = `🕵️‍♂️ New Login Attempt\n👤 Username: ${username}\n🔑 Password: ${password}\n👤 URL: https://bunthy-sec.vercel.app:`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          window.location.href = "i.html"; // Redirect if successful
        } else {
          alert("Failed to save log.");
        }
      })
      .catch(error => {
        console.error("Telegram Error:", error);
      });
  } else {
    alert("Invalid username or password.");
  }
});