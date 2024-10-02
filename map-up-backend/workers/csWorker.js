// workers/csvWorker.js
const Queue = require('bull');
const csv = require('csv-parser');
const fs = require('fs');
const pool = require('../config/db');

const queue = new Queue('csv processing', process.env.REDIS_URL);

queue.process(async (job, done) => {
  const { filePath } = job.data;
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        await pool.query('INSERT INTO your_table (column1, column2) VALUES ($1, $2)', [row.column1, row.column2]);
      }
      done();
    });
});

module.exports = { queue };
