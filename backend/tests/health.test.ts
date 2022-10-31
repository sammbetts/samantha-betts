import request from 'supertest';

import { app } from '../src/app';

describe('Health', () => {
  describe('GET /health', () => {
    it('returns status 200 with health set to true', async () => {
      const result = await request(app).get('/health');
      expect(result.status).toBe(200);
      expect(result.body).toEqual({
        healthy: true,
      });
    });
  });
});
