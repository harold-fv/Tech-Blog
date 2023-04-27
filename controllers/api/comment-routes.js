// Import required modules, models, and authentication middleware
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// Create a new comment with the authenticated user's ID
router.post("/", withAuth, (req, res) => {

 // Create a new comment with the request data and the authenticated user's ID
  Comment.create({ ...req.body, userId: req.session.userId })

 // Send the newly created comment as a JSON response
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// Export the router
module.exports = router;