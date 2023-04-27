// Import required modules, models, and authentication middleware
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// Retrieve all posts of the authenticated user
router.get("/", withAuth, (req, res) => {
  console.log('We are here')
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })

    // Render the posts in the "all-posts-admin" view
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("all-posts-admin", {
          layout: "dashboard",
          posts
        });
      })

       // Redirect to the login page if an error occurs
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

// Render the "new-post" view for creating a new post
  router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
      layout: "dashboard"
    });
  });
  
// Retrieve a post by ID and render the "edit-post" view
  router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
        // Render the "edit-post" view with the selected post
          res.render("edit-post", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  // Export the router
module.exports = router;