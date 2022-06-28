const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
  if (!req.query.address) {
    return res.send({
      Error: 'Provide the address name',
    });
  }

  const address = req.query.address;

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({
        Error: 'Enter a valid address',
      });
    }

    forecast(latitude, longitude, (error, data) => {
      if (error) {
        console.log(error);
        return res.send({
          Error: 'Something went wrong',
        });
      }

      res.send({
        Location: location,
        Data: data,
      });
    });
  });

  // res.send({
  //   forecast: 'Rain',
  //   address: req.query.address,
  // });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      Error: 'You must provide a search term',
    });
  }

  res.send({
    products: [],
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
