// Show and hide modals
function showSignIn() {
  document.getElementById("sign-up-modal").style.display = "none"
  document.getElementById("sign-in-modal").style.display = "flex"
}

function showSignUp() {
  document.getElementById("sign-in-modal").style.display = "none"
  document.getElementById("sign-up-modal").style.display = "flex"
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none"
}

function showForgotPassword() {
  // You can implement this functionality later
  alert("Forgot password functionality will be implemented soon.")
}

// Toggle password visibility
function togglePasswordVisibility(inputId, button) {
  const input = document.getElementById(inputId)
  const icon = button.querySelector("i")

  if (input.type === "password") {
    input.type = "text"
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
  } else {
    input.type = "password"
    icon.classList.remove("fa-eye-slash")
    icon.classList.add("fa-eye")
  }
}

// Handle form submissions
function handleSignIn(event) {
  event.preventDefault()

  const email = document.getElementById("sign-in-email").value
  const password = document.getElementById("sign-in-password").value
  const button = document.getElementById("sign-in-button")
  const errorElement = document.getElementById("sign-in-error")

  // Show loading state
  button.disabled = true
  button.innerHTML = '<span class="spinner"></span> Signing in...'
  errorElement.style.display = "none"

  // Simulate API call (replace with your actual authentication logic)
  setTimeout(() => {
    // For demo purposes, we'll just check if the email contains "test"
    if (email.includes("test")) {
      // Success - redirect or update UI
      window.location.href = "/dashboard.html" // Replace with your dashboard URL
    } else {
      // Show error
      errorElement.textContent = "Invalid email or password. Please try again."
      errorElement.style.display = "block"
      button.disabled = false
      button.innerHTML = "<span>Sign In</span>"
    }
  }, 1500)
}

function handleSignUp(event) {
  event.preventDefault()

  const name = document.getElementById("sign-up-name").value
  const email = document.getElementById("sign-up-email").value
  const password = document.getElementById("sign-up-password").value
  const confirmPassword = document.getElementById("sign-up-confirm-password").value
  const button = document.getElementById("sign-up-button")
  const errorElement = document.getElementById("sign-up-error")

  // Validate passwords match
  if (password !== confirmPassword) {
    errorElement.textContent = "Passwords do not match."
    errorElement.style.display = "block"
    return
  }

  // Show loading state
  button.disabled = true
  button.innerHTML = '<span class="spinner"></span> Creating account...'
  errorElement.style.display = "none"

  // Simulate API call (replace with your actual registration logic)
  setTimeout(() => {
    // For demo purposes, we'll just simulate success
    // In a real app, you would make an API call to create the user
    window.location.href = "/dashboard.html" // Replace with your dashboard URL
  }, 1500)
}

// Close modals when clicking outside
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("auth-modal")) {
    event.target.style.display = "none"
  }
})

