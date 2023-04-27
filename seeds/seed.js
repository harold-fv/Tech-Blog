const sequelize = require('../config/connection');
const seedUsers = require('./User');
const seedPosts = require('./Post');
const seedComments = require('./Comment');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\nUsers seeded!\n');

  await seedPosts();
  console.log('\nPosts seeded!\n');

  await seedComments();
  console.log('\nComments seeded!\n');

  process.exit(0);
};

seedAll();




