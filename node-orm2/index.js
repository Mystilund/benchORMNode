const getConfig = require('../getConfig.js')
let connection = require('./connection.js')
let User = require('./models/User.js')

// Create an user and edit it right after
async function createAndUpdate(ormUser, _user) {
  let user = await ormUser.model.createAsync(_user)
  user.name = 'newName'
  try {
    let updatedUser = await user.saveAsync()
    return updatedUser
  } catch (e) {
    console.log(e)
    return user
  }
}

getConfig.parseConfig('./config.yml').then((config) => {
  connection.initialize(config).then((orm) => {
    let user = new User()

    createAndUpdate(user, {
      name: 'MyUser',
      email: 'my@user.com',
      created_at: new Date(),
      updated_at: new Date()
    }).then((newUser) => { // success
      console.log(JSON.parse(JSON.stringify(newUser)))
      orm.close()
    }).catch((e) => {      // error
      console.log(e)
    })
  }).catch((error) => {
    console.log('catch', error)
  })
})
