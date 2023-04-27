// Function to handle the submission of the login form
const loginFormHandler = async function(event) {
    event.preventDefault();
  
// Get the username and password from the input elements
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");

   // Send a POST request to the '/api/user/login' endpoint with the username and password
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
// Redirect the user to the dashboard after a successful login
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);