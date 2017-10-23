const getConfig = require('../getConfig.js')
let connection = require('./connection.js')
let User = require('./models/User.js')

// Create an user and edit it right after
async function createAndUpdate (sequelizeUser, _user) {
  let user = await sequelizeUser.model.create(_user)
  let updatedUser = await user.update({
    name: 'newName'
  })
  return updatedUser
}

getConfig.parseConfig ('./config.yml').then((config) => {
  connection.initialize(config).then((sequelize) => {
    let user = new User(sequelize)

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
