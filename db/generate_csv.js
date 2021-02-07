const db = require('./index.js');
const fs = require('fs');
const path = require('path');
const generator = require('./generateSellers.js')

const CSV_SIZE = 10_000_000;
const DATA_CHUNK_SIZE = 1_000;

let writeStream = fs.createWriteStream(path.join(__dirname, 'sellers.csv'));
let csvHeader = generator.header();
writeStream.write(csvHeader, 'utf-8');
for (let id = 1; id < CSV_SIZE; id += DATA_CHUNK_SIZE) {
  let sellers = generator.addSellers(id, DATA_CHUNK_SIZE);
  writeStream.write(sellers, 'utf-8');
}

writeStream.end();
