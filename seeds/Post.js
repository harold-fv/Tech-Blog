const { Post } = require('../models');

const postData = [
  {
    title: "First Post",
    body: "This is the body of the first post.",
    userId: 1
  },
  {
    title: "Second Post",
    body: "This is the body of the second post.",
    userId: 2
  },
  {
    title: "Third Post",
    body: "This is the body of the third post.",
    userId: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;