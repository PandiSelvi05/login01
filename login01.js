
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (!isValidUsername(username)) {
    document.getElementById("error-message").textContent = "Invalid username. Please enter a valid username.";
    return;
  }
  
  alert("Login successful!");
});

function isValidUsername(username) {
  return username.length >= 3 && /^[a-zA-Z0-9]+$/.test(username);
}

