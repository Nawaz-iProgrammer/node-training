const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('views', 'public/views');
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'John',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Weather',
    name: 'John',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    info: 'Help page is yet to ready',
  });
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
