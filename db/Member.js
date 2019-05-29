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
    // recommendedby: {
    //   type: Sequelize.INTEGER,
    //   reference: 'member',
    //   id: 'memid',
    // },
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

// CREATE TABLE cd.members
// (
//    memid integer NOT NULL,
//    surname character varying(200) NOT NULL,
//    firstname character varying(200) NOT NULL,
//    address character varying(300) NOT NULL,
//    zipcode integer NOT NULL,
//    telephone character varying(20) NOT NULL,
//    recommendedby integer,
//    joindate timestamp not null,
//    CONSTRAINT members_pk PRIMARY KEY (memid),
//    CONSTRAINT fk_members_recommendedby FOREIGN KEY (recommendedby)
//         REFERENCES cd.members(memid) ON DELETE SET NULL
// );
