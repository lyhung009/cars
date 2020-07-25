const jsonGraphqlExpress = require('json-graphql-server').default;
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const PORT = 3000;
const app = express();
const data = JSON.parse(fs.readFileSync('DB.json', 'utf8'));
app.use(cors());

let numCall = 0;
app.use(function (req, res, next) {
  numCall++;
  if (numCall === 7) {
    res.status(500).send();
  }
  next();
});

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
  console.log('Listen on port: ' + PORT);
});
