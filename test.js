const generator = require('./db/generator.js');
const express = require('express');
const server = require('./server/index.js');
const request = require('supertest');
const db = require('./db/index.js');
const app = express();

describe('create seller data', () => {

  it('returns an array', () => {
    let seller = generator.createSeller();
    expect(Array.isArray(seller)).toBe(true);
  })

  it('returns a seller rating between 2 and 5', () => {
    let seller = generator.createSeller();
    let seller_rating = seller[0]
    expect(seller_rating).toBeGreaterThan(2)
    expect(seller_rating).toBeLessThan(6)
  })

})

describe('get seller data', () => {

  // afterAll(done => {
  //   server.close();
  //   done();
  // });

  it('GET /seller/items/ successfully', async (done) => {
    const { body } = await request(app).get('/seller/items/');
    expect(body).toBeDefined();
    done();
  })

})
