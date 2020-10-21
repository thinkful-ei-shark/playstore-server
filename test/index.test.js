const app = require('../index.js');
const supertest = require('supertest');

describe('PlayStore App', () => {
  describe('GET /apps', () => {
    it('should return applications', () => {
      return supertest(app).get('/apps').expect(200);
    });
    it('should return application by title', () => {
      return supertest(app).get('/apps?title=roblox').expect(200);
    });
    it('should return ')
  });
});
