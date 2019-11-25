const db = require('./db.js');
const Member = require('./Member.js');
const Facility = require('./Facility.js');
const Booking = require('./Booking.js');

Member.hasOne(Member, {
  foreignKey: 'memid',
  targetKey: 'recommendedby',
  as: 'recs',
});
// Member.belongsTo(Member, { as: 'recs' });

Booking.belongsTo(Facility, { foreignKey: 'facid' });
Facility.hasMany(Booking, { foreignKey: 'facid' });

Booking.belongsTo(Member, { foreignKey: 'memid' });
Member.hasMany(Booking, { foreignKey: 'memid' });

module.exports = { db, Member, Facility, Booking };
