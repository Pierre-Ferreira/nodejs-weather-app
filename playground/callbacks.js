let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Sammat'
  }
  setTimeout(() => {
    callback(user)
  }, 3000)

}

getUser(34, (userObj) => {
  console.log(userObj)
});
