const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=d11024df82dcf5399d649036140a85cb&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f';

  // request({ url: url, json: true }, (error, response)

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the service', undefined);
    } else if (body.error) {
      callback('Unable to find, enter the correct details', undefined);
    } else {
      callback(undefined, `Pressure is ${body.current['pressure']}`);
    }
  });
};

module.exports = forecast;
