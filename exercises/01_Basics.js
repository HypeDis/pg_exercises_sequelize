const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { db, Member, Facility, Booking } = require('./../db/index.js');
const answers = {};

// Question 1
// How can you retrieve all the information from the cd.facilities table?

answers.q1Raw = 'SELECT * FROM cd.facilities';

answers.q1 = () => {
  return Facility.findAll({ raw: true })
    .then(results => {
      return results;
    })
    .catch(e => console.error(e));
};

// Question 2
// You want to print out a list of all of the facilities and their cost to members. How would you retrieve a list of only facility names and costs?

answers.q2Raw = 'SELECT name, membercost FROM cd.facilities';

answers.q2 = () => {
  return Facility.findAll({ attributes: ['name', 'membercost'], raw: true })
    .then(results => {
      // console.log(results);
      return results;
    })
    .catch(e => console.error(e));
};

// Question 3
// How can you produce a list of facilities that charge a fee to members?

answers.q3Raw = 'SELECT * FROM cd.facilities WHERE membercost > 0';

answers.q3 = () => {
  return Facility.findAll({
    where: {
      membercost: { [Op.gt]: 0 },
    },
    raw: true,
  })
    .then(results => {
      return results;
    })
    .catch(e => console.error(e));
};

// Question 4
// How can you produce a list of facilities that charge a fee to members, and that fee is less than 1/50th of the monthly maintenance cost? Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.

answers.q4Raw =
  'SELECT facid, name, membercost, monthlymaintenance FROM cd.facilities WHERE membercost > 0 AND membercost < monthlymaintenance/50';

answers.q4 = () => {
  return Facility.findAll({
    attributes: ['facid', 'name', 'membercost', 'monthlymaintenance'],
    where: {
      membercost: {
        [Op.gt]: 0,
      },
    },
    raw: true,
  })
    .then(results => {
      return results.filter(
        row => row.membercost < row.monthlymaintenance / 50
      );
    })
    .catch(e => console.error(e));
};

// Question 5
// How can you produce a list of all facilities with the word 'Tennis' in their name?

answers.q5Raw = "SELECT * FROM cd.facilities WHERE name like '%Tennis%'";

answers.q5 = () => {
  return Facility.findAll({
    where: {
      name: {
        [Op.like]: '%Tennis%',
      },
    },
    raw: true,
  })
    .then(results => {
      return results;
    })
    .catch(e => console.error(e));
};

// Question 6
// How can you retrieve the details of facilities with ID 1 and 5? Try to do it without using the OR operator.

answers.q6Raw = 'SELECT * FROM cd.facilities WHERE facid in (1,5)';

answers.q6 = () => {
  return Facility.findAll({
    where: {
      facid: {
        [Op.in]: [1, 5],
      },
    },
    raw: true,
  })
    .then(results => {
      return results;
    })
    .catch(e => console.error(e));
};

// Question 7
// How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive' depending on if their monthly maintenance cost is more than $100? Return the name and monthly maintenance of the facilities in question.

answers.q7Raw = `select name, 
    case when (monthlymaintenance > 100) 
      then 'expensive' else 'cheap' 
    end as cost 
  from cd.facilities`;

answers.q7 = () => {
  return Facility.findAll({
    attributes: [
      'name',
      [
        Sequelize.literal(
          "case when (monthlymaintenance > 100) then 'expensive' else 'cheap' end"
        ),
        'cost',
      ],
    ],
    raw: true,
  })
    .then(results => {
      // console.log(results);
      return results;
    })
    .catch(e => console.error(e));
};

// Question 8
// How can you produce a list of members who joined after the start of September 2012? Return the memid, surname, firstname, and joindate of the members in question.

answers.q8Raw = `
select memid, surname, firstname, joindate
from cd.members
where joindate > '2012-09-01'`;

answers.q8 = () => {
  return Member.findAll({
    attributes: ['memid', 'surname', 'firstname', 'joindate'],
    where: {
      joindate: {
        [Op.gt]: new Date('2012-09-01'),
      },
    },
    raw: true,
  })
    .then(results => results)
    .catch(e => console.error(e));
};

// Question 9
// How can you produce an ordered list of the first 10 surnames in the members table? The list must not contain duplicates.
answers.q9Raw = `select distinct surname from cd.members
order by surname asc
limit 10
`;

answers.q9 = () => {
  return Member.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('surname')), 'surname'],
    ],
    order: [['surname', 'ASC']],
    limit: 10,
    raw: true,
  })
    .then(results => results)
    .catch(e => console.error(e));
};

// Question 10
// You, for some reason, want a combined list of all surnames and all facility names. Yes, this is a contrived example :-). Produce that list!

answers.q10Raw = `select surname from cd.members
union
select name from cd.facilities`;

// sequelize has no built in functionality for unions
answers.q10 = () => {
  return Promise.all([
    Member.findAll({ attributes: ['surname'], raw: true }),
    Facility.findAll({
      attributes: [[Sequelize.col('name'), 'surname']],
      raw: true,
    }),
  ])
    .then(([mems, facs]) => {
      // this is more union all than union
      return Object.assign([], mems, facs);
    })
    .catch(e => console.error(e));
};
module.exports = answers;

// Question 11
// You'd like to get the signup date of your last member. How can you retrieve this information?

answers.q11Raw = `select max(joindate) as latest from cd.members`;

answers.q11 = () => {
  return Member.max('joindate', { raw: true })
    .then(result => result)
    .catch(e => console.error(e));
};

// Question 12
// You'd like to get the first and last name of the last member(s) who signed up - not just the date. How can you do that?

answers.q12Raw = `select firstname, surname, joindate from cd.members
  where joindate = (select max(joindate) from cd.members)`;

answers.q12 = () => {
  return Member.findAll({
    attributes: ['firstname', 'surname', 'joindate'],
    where: {
      joindate: {
        // sequelize can't do aggregations in the where clause
        [Op.eq]: Sequelize.literal('(select max(joindate) from cd.members)'),
      },
    },

    raw: true,
  })
    .then(results => results)
    .catch();
};
