// Function to handle the deletion of a post
const deletePostHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();

  // Get the post ID from the hidden input element
    const postId = document.getElementById('post-id')

  // Send a DELETE request to the '/api/post/' endpoint with the post ID
    fetch("/api/post/" + postId.value, {
        method: "delete"
    })

 // Redirect the user to the dashboard after the post is deleted
    .then(function() {
        document.location.replace("/dashboard");
    })

  // Log any errors in the console
    .catch(err => console.log(err))
}

// Add an event listener to the delete button
document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);