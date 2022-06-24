const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=d11024df82dcf5399d649036140a85cb&query=13.0827,80.2707&units=f';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(
    `${data.current.weather_descriptions[0]} .It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike}`
  );
});
