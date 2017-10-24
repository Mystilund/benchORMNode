const typeorm = require('typeorm')
const Schemas = require('./entities')

module.exports = {
  initialize (config) {
    return new Promise((resolve, reject) => {
      typeorm.createConnection({
        type: 'mysql',
        host: config.database.host,
        port: 3306,
        username: config.database.username,
        password: config.database.password,
        database: config.database.db,
        synchronize: true,
        logging: false,
        entitySchemas: Schemas
      }).then((db) => {
        instance = db
        resolve(db)
      }).catch((e) => {
        console.log('error connection', e)
        reject(e)
      })
    })
  },
  /* SINGLETON */
  getInstance () {
    return instance
  }
}
