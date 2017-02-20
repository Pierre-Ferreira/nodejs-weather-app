const request = require('request')

const getWeather = (address, latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/add41fec402c9ed95110f575cbf095a6/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response.statusCode, undefined, 2))
    if (error) {
      callback('Unable to access Darksky server!')
    } else if (response.statusCode===404) {
      callback('Unable to find that address')
    } else if (response.statusCode===200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports = {
  getWeather
}
