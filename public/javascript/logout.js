// Function to handle the user logout
function logout() {

// Send a POST request to the '/api/user/logout' endpoint
    fetch("/api/user/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })

    // Redirect the user to the homepage after a successful logout
      .then(function() {
        document.location.replace("/");
      })
      .catch(err => console.log(err));
  }
// Add an event listener to the logout link
  document.querySelector("#logout-link").addEventListener("click", logout);