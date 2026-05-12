const request =
require('supertest');

const app =
require('../src/server');

describe(
'GET /questions',

() => {

  test(
    'Should fetch questions',

    async () => {

      const res =
        await request(app)
        .get('/questions');

      expect(
        res.statusCode
      ).toBe(200);
    }
  );
});