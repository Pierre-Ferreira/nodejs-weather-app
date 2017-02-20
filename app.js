const request = require('request')
const yargs = require('yargs')

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

// console.log(argv)
let encodedAddress = encodeURIComponent(argv.a)

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2))
  console.log(`Address: ${body.results[0].formatted_address}`)
  console.log(`lat: ${body.results[0].geometry.location.lat}`)
  console.log(`lng: ${body.results[0].geometry.location.lng}`)
  // console.log('-----------')
  // console.log('ERROR:::', JSON.stringify(error, undefined, 2))
  // console.log('-----------')
  // console.log('RESPONSE:::', JSON.stringify(response, undefined, 2))
})
