let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Agruments must be numbers')
      }
    }, 1500)
  })
}

asyncAdd(5, 5).then((result) => {
  console.log('result1:', result)
  return asyncAdd(result, '324')
}).then((result) => {
  console.log('result2', result)
}).catch((errorMessage) => {
  console.log(errorMessage)
})

// asyncAdd(5, 'd').then((result) => {
//   console.log('result1:', result)
//   return asyncAdd(result, 324)
// }, (errorMessage) => {
//   console.log('err1', errorMessage)
// }).then((result) => {
//   console.log('result2', result)
// }, (errorMessage) => {
//   console.log('err2', errorMessage)
// })

// let somePromise = new Promise((resolve, reject) => {
//   resolve('Hey, It worked!')
//   reject('FAILED!')
// })
//
// somePromise.then((message) => {
//   console.log('Success:', message)
// }, (failMSG) => {
//     console.log('NOOOO:', failMSG)
// })
