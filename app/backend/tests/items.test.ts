import request from 'supertest';

import { app } from '../src/app';

describe('Items', () => {
  describe('GET /items', () => {
    it('returns items list with status 200', async () => {
      const result = await request(app).get('/items');
      expect(result.status).toBe(200);
      expect(result.body).toEqual([
        {
          id: 1,
          name: 'Alfie',
          date: new Date('2020-01-01'),
          emoji: '😺',
        },
        {
          id: 3,
          name: 'Samantha',
          date: new Date('2020-01-02'),
          emoji: '🌙',
        },
      ]);
    });
  });

  describe('GET /items/:itemId', () => {
    it('returns item 1 with status code 200', async () => {
      const result = await request(app).get('/items/1');
      expect(result.status).toBe(200);
      expect(result.body).toEqual({
        id: 1,
        name: 'Alfie',
        date: new Date('2020-01-01'),
        emoji: '😺',
      });
    });

    it('returns empty body with status code 404', async () => {
      const result = await request(app).get('/items/10');
      expect(result.status).toBe(404);
      expect(result.body).toEqual({
        message: "item with id '10' not found",
      });
    });
  });
});
