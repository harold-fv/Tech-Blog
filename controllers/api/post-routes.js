// Import required modules, models, and authentication middleware
const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

// Create a new post with the authenticated user's ID
router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Post.create({ ...body, userId: req.session.userId })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Update a post by ID using authenticated user's ID
router.put("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id)
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })

 // Check if the post was successfully updated and send the appropriate response
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Delete a post by ID using authenticated user's ID
router.delete("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id)
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;