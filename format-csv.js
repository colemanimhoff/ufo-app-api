const csv = require('csv-parser');
const fastcsv = require('fast-csv');
const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');

const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    const keys = Object.keys(row);
    const newRow = keys.reduce((acc, curr) => {
      if (curr !== '') {
        acc[curr] = row[curr];
        if ((curr === 'latitude' || curr === 'longitude') && acc[curr] === 0) {
          acc[curr] = null;
        }
        if (acc[curr] === '') {
          acc[curr] = null;
        }
      }
      return acc;
    }, {});
    // newRow['id'] = uuidv4();
      results.push(newRow);
  })
  .on('end', () => {
    console.log(results);
    const ws = fs.createWriteStream("formatted-data.csv");
    fastcsv
      .write(results, { headers: true })
      .pipe(ws);
    console.log('CSV file successfully processed');
  });