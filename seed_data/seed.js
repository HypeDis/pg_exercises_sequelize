const { db } = require('./../db/index.js');
const { exec } = require('child_process');

const seedDb = () => {
  console.log('seeding database');
  exec('psql -f ./seed_data/clubdata.sql', (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    db.sync()
      .then(() => {
        console.log('models synced');
        db.close();
        console.log('seeding complete');
      })
      .catch(e => console.error(e));
  });
};

seedDb();

// module.exports = seedDb;
