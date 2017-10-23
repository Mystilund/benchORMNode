const getConfig = require('../getConfig.js')
let connection = require('./connection.js')
let User = require('./models/User.js')

// Create an user and edit it right after
async function createAndUpdate(bookshelfUser, _user) {
  let userInstance = new bookshelfUser.model()
  let user = await userInstance.set(_user).save()
  let updatedUser = await user.set({
    name: 'newName'
  }).save()
  return updatedUser
}

getConfig.parseConfig('./config.yml').then((config) => {
  connection.initialize(config).then((resultConnection) => {
    let user = new User()
    user.initialize(connection)

    createAndUpdate(user, {
      name: 'MyUser',
      email: 'my@user.com'
    }).then((newUser) => { // success
      console.log(newUser)
    }).catch((e) => {      // error
      console.log(e)
    })
  }).catch((error) => {
    console.log('catch', error)
  })
})
