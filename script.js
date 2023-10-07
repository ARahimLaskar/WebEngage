function saveData(event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const country = document.getElementById("country").value;
  const mobileInput = document.getElementById("mobileInput");
  const mobile = mobileInput.value;

  // Mobile number validation
  if (!/^\d{10}$/.test(mobile)) {
    showError("mobileError", "You have entered an invalid Mobile number");
    return;
  } else {
    hideError("mobileError");
  }

  // Email validation
  if (!isValidEmail(email)) {
    showError("emailError", "You have entered an invalid email address");
    return;
  } else {
    hideError("emailError");
  }

  // Store data in sessionStorage for use on the thank you page
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("country", country);
  sessionStorage.setItem("mobile", mobile);

  // Redirect to the thank you page
  window.location.href = "thankyou.html";
}

// Function to check email validity
function isValidEmail(email) {
  // A basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to show error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Function to hide error message
function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.visibility = "hidden";
}
