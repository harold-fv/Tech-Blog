const { Comment } = require('../models');

const commentData = [
  {
    body: "This is a great post!",
    userId: 1,
    postId: 1
  },
  {
    body: "I really enjoyed reading this!",
    userId: 2,
    postId: 2
  },
  {
    body: "Thanks for sharing!",
    userId: 3,
    postId: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;