const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Mick',
    },
    {
      name: 'Yui',
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    state: 'Ke',
    climate: 'Rain',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
