const Sequelize = require('sequelize');

const db = require('./db.js');

const Booking = db.define(
  'booking',
  {
    bookid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    starttime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    slots: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, schema: 'cd' }
);

module.exports = Booking;
