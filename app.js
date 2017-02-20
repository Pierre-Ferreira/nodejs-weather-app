const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    let longitude = result.longitude
    let latitude = result.latitude
    let address = result.address
    weather.getWeather(address, latitude, longitude, (errorMsg, result) => {
      if (errorMsg) {
        console.log(errorMsg)
      } else {
        let {temperature, apparentTemperature} = result
        temperature = parseFloat((temperature- 32) / 1.8).toFixed(2)
        apparentTemperature = parseFloat((apparentTemperature- 32) / 1.8).toFixed(2)
        console.log(`The temp at '${address}' is ${temperature}°C`)
        console.log(`but it feels like ${apparentTemperature}°C`)
      }
    })

  }
})
