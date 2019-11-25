const { db, Member, Booking, Facility } = require('../db/index.js');

xdescribe('Check the database', () => {
  test('should connect to the database', () => {
    return expect(
      db
        .authenticate()
        .then(() => {
          // db.close();
          return 'authenticated';
        })
        .catch(e => console.error(e))
    ).resolves.toEqual('authenticated');
  });

  test('should contain 3 models', async () => {
    try {
      const members = await Member.findAll();
      const bookings = await Booking.findAll();
      const facilities = await Facility.findAll();

      expect(members.length).toBeTruthy();
      expect(bookings.length).toBeTruthy();
      expect(facilities.length).toBeTruthy();
    } catch (e) {
      console.error(e);
    }
  });
});
