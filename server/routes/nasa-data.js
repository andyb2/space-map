// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.get('/nasa-data', (_, res) => {
//   fs.open('test.json', async err => {
//     if (err) {
//       try {
//         const response = await fetch(
//           'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'
//         );

//         const call = await response.json();

//         fs.writeFile('test.json', JSON.stringify(call, null, 4), err => {
//           if (err) throw err;

//           res.send(`File has been created :)`);
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       res.send('File already exists! :)');
//     }
//   });
// });

// module.exports = app;
