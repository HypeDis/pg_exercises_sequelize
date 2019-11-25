const Sequelize = require('sequelize');

const db = require('./db.js');
const Facility = db.define(
  'facility',
  {
    facid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    membercost: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    guestcost: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    initialoutlay: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    monthlymaintenance: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
  },
  { timestamps: false, schema: 'cd' }
);

module.exports = Facility;
