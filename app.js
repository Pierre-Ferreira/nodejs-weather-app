const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=761%2011th%20ave%20Wonderboom%20south%20Pretoria',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2))
})
