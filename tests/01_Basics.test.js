const sect1Answers = require('./../exercises/01_Basics.js');
const solutions = require('./../query_results/01_Basics.solutions.js');
const getRawQuery = require('./../utils/getRawQuery.js');

xdescribe('Section 1, Basics', () => {
  // question 1
  describe('Retrieve everything from a table', () => {
    test('raw query', async () => {
      const q1Raw = await getRawQuery(sect1Answers.q1Raw);
      expect(q1Raw).toEqual(solutions.q1);
    });
    test('sequelize', async () => {
      const q1 = await sect1Answers.q1();
      expect(q1).toEqual(solutions.q1);
    });
  });

  // question 2
  describe('Retrieve specific columns from a table', () => {
    test('raw query', async () => {
      const q2Raw = await getRawQuery(sect1Answers.q2Raw);
      expect(q2Raw).toEqual(solutions.q2);
    });

    test('sequelize', async () => {
      const q2 = await sect1Answers.q2();
      expect(q2).toEqual(solutions.q2);
    });
  });

  // question 3
  describe('Control which rows are retrieved', () => {
    test('raw query', async () => {
      const q3Raw = await getRawQuery(sect1Answers.q3Raw);
      expect(q3Raw).toEqual(solutions.q3);
    });

    test('sequelize', async () => {
      const q3 = await sect1Answers.q3();
      expect(q3).toEqual(solutions.q3);
    });
  });

  // question 4
  describe('Control which rows are retrieved - part 2', () => {
    test('raw query', async () => {
      const q4Raw = await getRawQuery(sect1Answers.q4Raw);
      expect(q4Raw).toEqual(solutions.q4);
    });
    test('sequelize', async () => {
      const q4 = await sect1Answers.q4();
      expect(q4).toEqual(solutions.q4);
    });
  });

  // question 5
  describe('Basic string searches', () => {
    test('raw query', async () => {
      const q5Raw = await getRawQuery(sect1Answers.q5Raw);
      expect(q5Raw).toEqual(solutions.q5);
    });

    test('sequelize', async () => {
      const q5 = await sect1Answers.q5();
      expect(q5).toEqual(solutions.q5);
    });
  });

  // question 6
  describe('Matching against multiple possible values', () => {
    test('raw query', async () => {
      const q6Raw = await getRawQuery(sect1Answers.q6Raw);
      expect(q6Raw).toEqual(solutions.q6);
    });

    test('sequelize', async () => {
      const q6 = await sect1Answers.q6();
      expect(q6).toEqual(solutions.q6);
    });
  });

  // question 7
  describe('Classify results into buckets', () => {
    test('raw query', async () => {
      const q7Raw = await getRawQuery(sect1Answers.q7Raw);
      expect(q7Raw).toEqual(solutions.q7);
    });

    test('sequelize', async () => {
      const q7 = await sect1Answers.q7();
      expect(q7).toEqual(solutions.q7);
    });
  });

  // question 8
  describe('Working with dates', () => {
    test('raw query', async () => {
      const q8Raw = await getRawQuery(sect1Answers.q8Raw);
      expect(q8Raw).toEqual(solutions.q8);
    });

    test('sequelize', async () => {
      const q8 = await sect1Answers.q8();
      expect(q8).toEqual(solutions.q8);
    });
  });

  // question 9
  describe('Removing duplicates, and ordering results', () => {
    test('raw query', async () => {
      const q9Raw = await getRawQuery(sect1Answers.q9Raw);
      expect(q9Raw).toEqual(solutions.q9);
    });

    test('sequelize', async () => {
      const q9 = await sect1Answers.q9();
      expect(q9).toEqual(solutions.q9);
    });
  });

  // question 10
  describe('Combining results from multiple queries', () => {
    test('raw query', async () => {
      const q10Raw = await getRawQuery(sect1Answers.q10Raw);
      expect(q10Raw).toEqual(solutions.q10);
    });
    // sequelize cant do unions, skip
    // xtest('sequelize', async () => {
    //   const q10 = await sect1Answers.q10();
    //   expect(q10).toEqual(solutions.q10);
    // });
  });

  // question 11
  describe('Simple aggregation', () => {
    test('raw query', async () => {
      const q11Raw = await getRawQuery(sect1Answers.q11Raw);
      expect(q11Raw).toEqual(solutions.q11);
    });

    test('sequelize', async () => {
      const q11 = await sect1Answers.q11();
      // sequelize returns only the value, not a table
      expect(q11).toEqual(solutions.q11[0].latest);
    });
  });

  // question 12
  describe('More aggregation', () => {
    test('raw query', async () => {
      const q12Raw = await getRawQuery(sect1Answers.q12Raw);
      expect(q12Raw).toEqual(solutions.q12);
    });

    test('sequelize', async () => {
      const q12 = await sect1Answers.q12();
      expect(q12).toEqual(solutions.q12);
    });
  });
});
