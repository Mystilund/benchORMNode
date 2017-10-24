const orm = require('orm')
var models = require('./models')

let instance = null

// Create table if doesn't exist for each model
async function initializeModels(connection) {
  let promises = []

  Object.values(models).forEach((model) => {
    promises.push(model.initializeModel(connection))
  })

  return Promise.all(promises)
}

module.exports = {
  // open connection
  initialize (config) {
    return new Promise ((resolve, reject) => {
      orm.connect(`mysql://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.db}`, (err, db) => {
        instance = db

        if (err) {
          console.log(err)
          reject(err)
          return
        }

        initializeModels(this).then(() => {
          // Create tables
          db.sync((err) => {
            if (err) {
              console.log(err)
              reject(err)
            } else {
              // no error
              resolve(db)
            }
          })
        }).catch ((e) => {
          console.log(e)
          reject(e)
        })
      })
    })
  },
  /* Singleton */
  getInstance () {
    return instance
  }
}
