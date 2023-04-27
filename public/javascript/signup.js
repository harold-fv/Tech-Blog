// Function to handle the submission of the signup form
const signupFormHandler = async function(event) {
    event.preventDefault();
  
  // Get the username and password from the input elements
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");

    // Send a POST request to the '/api/user' endpoint with the username and password
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })

 // Redirect the user to the dashboard after successful signup
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
// Add an event listener to the signup form submission
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);