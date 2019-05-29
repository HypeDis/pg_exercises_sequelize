const db = require('./db.js');
const Member = require('./Member.js');
const Facility = require('./Facility.js');
const Booking = require('./Booking.js');

Member.belongsTo(Member, { as: 'recommendedby' });

Booking.belongsTo(Facility, { as: 'facid' });
Facility.hasMany(Booking);

Booking.belongsTo(Member, { as: 'memid' });
Member.hasMany(Booking);

db.sync()
  .then(() => {
    console.log('db synced');
  })
  .catch(e => console.error(e));

module.exports = { db, Member, Facility, Booking };
