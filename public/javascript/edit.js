// Function to handle the submission of an edited post
const editFormHandler = async function(event) {

    // Prevent the default form submission behavior
    event.preventDefault();

// Get the title, body, and post ID from the input elements
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const postId = document.getElementById('post-id')

 // Send a PUT request to the '/api/post/' endpoint with the updated title and body
    fetch("/api/post/" + postId.value, {
    
        method: "put", 
        body: JSON.stringify({
        title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })

  // Redirect the user to the dashboard after the post is updated
        .then(function() {
            document.location.replace("/dashboard");
       
        })
        .catch(err => console.log(err))
}

// Add an event listener to the edit post form submission
document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);

