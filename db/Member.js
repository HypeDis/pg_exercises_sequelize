const Sequelize = require('sequelize');
const db = require('./db.js');

const Member = db.define(
  'member',
  {
    memid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recommendedby: {
      type: Sequelize.INTEGER,
      reference: 'member',
      id: 'memid',
      recommendedby: {
        type: Sequelize.INTEGER,
        reference: 'member',
        id: 'memid',
      },
    },
    joindate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    schema: 'cd',
    timestamps: false,
  }
);

module.exports = Member;
