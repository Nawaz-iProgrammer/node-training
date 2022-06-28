const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../public/templates/views');
const partialsPath = path.join(__dirname, '../public/templates/partials');

// Setup handlebar engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'John',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Programmer',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'You can find help here',
    title: 'Help',
    name: 'John',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Rain',
    Location: 'Delhi',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'John',
    errorMessage: 'Help article not found.',
  });
});

app.get('*', (req, res) => {
  res.send('404 NOT FOUND');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
