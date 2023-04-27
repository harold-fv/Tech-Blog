
// Import required modules and models
const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// Retrieve all posts with their associated users
router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })

 // Render the "all-posts" view with the retrieved posts
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

     // Render the "all-posts" view with the retrieved posts
      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Retrieve a single post by ID with its associated user and comments
router.get("/post/:id", (req, res) => {
  // Find the post with the specified ID and include associated user and comments
  Post.findByPk(req.params.id, {
    include: [

      // Include the associated user
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })

 // Render the "single-post" view with the retrieved post
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        // Render the "single-post" view with the retrieved post
        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Render the "login" view if the user is not logged in
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
// Render the "login" view
  res.render("login");
});

// Render the "signup" view if the user is not logged in
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
// Render the "signup" view
  res.render("signup");
});

module.exports = router;