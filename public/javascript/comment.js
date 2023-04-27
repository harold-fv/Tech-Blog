
// Function to handle the submission of a new comment
const commentFormHandler = async function(event) {
    event.preventDefault();
 // Get the post ID and comment body from the form input elements
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
 // Check if the comment body is not empty
    if (body) {
      await fetch('/api/comment', {

       // Send a POST request to the '/api/comment' endpoint with the post ID and comment body
        method: 'POST',
        body: JSON.stringify({
          postId,
          body

      
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
    // Reload the page after the comment is submitted
      document.location.reload();
    }
  };
  
// Add an event listener to the comment form submission
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);