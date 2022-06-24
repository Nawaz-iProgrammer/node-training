const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(13.0827, 80.2707, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
