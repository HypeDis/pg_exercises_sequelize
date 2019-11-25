const Sequelize = require('sequelize');
const { db } = require('./../db/index.js');

module.exports = queryString => {
  return new Promise((resolve, reject) => {
    db.query(queryString, {
      // type: Sequelize.QueryTypes[type],
      raw: true,
    })
      .then(results => resolve(results[0]))
      .catch(e => reject(e));
  });
};
