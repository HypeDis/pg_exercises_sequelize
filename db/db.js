const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/pg_exercises', {
  logging: false,
});

module.exports = db;
