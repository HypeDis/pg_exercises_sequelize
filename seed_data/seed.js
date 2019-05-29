const cmd = require('node-cmd');

const seedDb = () => {
  cmd.run('psql -f ./seed_data/clubdata.sql');
};

seedDb();

console.log('database seed successful');

module.exports = seedDb;
