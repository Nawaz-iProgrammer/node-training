const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoibmF3YXppcHJvIiwiYSI6ImNsNHMxZ2FxazB6cDIzY3MycmE0Y3Q1ZWUifQ.E4ddMJXNZAY_bJHoiypOgg&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the service');
    } else if (response.body.features.length === 0) {
      callback('Unable to find, enter the correct details');
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
