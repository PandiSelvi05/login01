document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  	
  if (!isValidName(name)) {
    document.getElementById("error-message").textContent = "Invalid name. Please enter a valid name.";
    return;
  }

  if (!isValidEmail(email)) {
    document.getElementById("error-message").textContent = "Invalid email. Please enter a valid email address.";
    return;
  }



  alert("Registration successful!");
});

function myFunction() {
window.location.href="registrationres01.html";
}

function isValidName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

