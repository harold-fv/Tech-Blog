// Function to handle the submission of the new post form
const newFormHandler = async function(event) {
    event.preventDefault();
    
 // Get the title and body from the input elements
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

  // Retrieve the token from the local storage
    const token = localStorage.getItem("token");

    // Send a POST request to the '/api/post' endpoint with the title and body
    await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    });

    document.location.replace("/dashboard");
  };
// Redirect the user to the dashboard after a successful post creation
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);