let knex = require('knex');
let bookshelf = require('bookshelf')
let models = require('./models')

let bookshelfInstance = null
let knexInstance = null

// Create table if doesn't exist for each model
async function initializeModels(connection) {
  let promises = []

  Object.values(models).forEach((model) => {
    promises.push(model.initializeModel(connection))
  })

  return Promise.all(promises)
}

module.exports = {
  // open connection and initialize the models
  initialize (config) {
    return new Promise((resolve, reject) => {
      knexInstance = knex({
        client: 'mysql2',
        connection: {
          host: config.database.host,
          user: config.database.username,
          password: config.database.password,
          database: config.database.db,
          charset: 'utf8'
        }
      })
      bookshelfInstance = bookshelf(knexInstance)
      initializeModels(this).then((a) => {
        resolve({
          knexInstance,
          bookshelfInstance
        })
      }).catch((error) => {
        console.log(error)
      })
    })
  },
  /* Singletons */
  getKnexInstance() {
    return knexInstance
  },
  getBookshelfInstance() {
    return bookshelfInstance
  }
}
