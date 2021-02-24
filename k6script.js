import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 1 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 1000 },
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 1 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};


export default function () {
  const BASE_URL = 'http://localhost:3005';
  http.get(`${BASE_URL}/items/9500000`);
  sleep(1);
}


// let responses = http.batch([
//   [
//     'GET',
//     `${BASE_URL}/items/9500000`,
//     null,
//     { tags: { name: 'PublicCrocs' } },
//   ],
//   [
//     'GET',
//     `${BASE_URL}/items/9600000`,
//     null,
//     { tags: { name: 'PublicCrocs' } },
//   ],
//   [
//     'GET',
//     `${BASE_URL}/items/9700000`,
//     null,
//     { tags: { name: 'PublicCrocs' } },
//   ],
//   [
//     'GET',
//     `${BASE_URL}/items/9800000`,
//     null,
//     { tags: { name: 'PublicCrocs' } },
//   ],
// ]);