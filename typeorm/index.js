const getConfig = require('../getConfig.js')
let connection = require('./connection.js')
let TypeUser = require('./models/TypeUser.js')

// Create an user and edit it right after
async function createAndUpdate(connection, _user) {
  console.log(TypeUser)
  let user = new TypeUser(_user)
  try {
    await connection.manager.save(user)
  } catch (e) {
    console.log('Error save', e)
  }

  let repo = connection.getRepository(TypeUser)
  try {
    await repo.save(user.set({ name: 'newName' }))
  } catch (e) {
    console.log('Error update', e)
  }

  return user
}

getConfig.parseConfig('./config.yml').then((config) => {
  connection.initialize(config).then((typeorm) => {
    createAndUpdate(typeorm, {
      name: 'MyUser',
      email: 'my@user.com'
    }).then((newUser) => { // success
      console.log(newUser)
    }).catch((e) => {      // error
      console.log('error createAndUpdate', e)
    })
  }).catch((error) => {
    console.log('catch', error)
  })
})
