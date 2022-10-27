import request from 'supertest';

import { app } from '../src/app';

describe('Users', () => {
  describe('GET /users', () => {
    it('returns users list with status 200', async () => {
      const result = await request(app).get('/users');
      expect(result.status).toBe(200);
      expect(result.body).toEqual([
        {
          id: 1,
          name: 'David',
          email: 'david@dazn.com',
          emoji: '🚀',
        },
        {
          id: 2,
          name: 'Marco',
          email: 'marco@dazn.com',
          emoji: '🤟🏻',
        },
        {
          id: 3,
          name: 'Samantha',
          email: 'samm@dazn.com',
          emoji: '🌙',
        },
      ]);
    });
  });

  describe('GET /users/:userId', () => {
    it('returns user 1 with status code 200', async () => {
      const result = await request(app).get('/users/1');
      expect(result.status).toBe(200);
      expect(result.body).toEqual({
        id: 1,
        name: 'David',
        email: 'david@dazn.com',
        emoji: '🚀',
      });
    });

    it('returns empty body with status code 404', async () => {
      const result = await request(app).get('/users/10');
      expect(result.status).toBe(404);
      expect(result.body).toEqual({
        message: "User with id '10' not found",
      });
    });
  });
});
