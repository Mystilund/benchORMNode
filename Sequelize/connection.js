const Sequelize = require('sequelize')
let instance = null

module.exports = {
  // open connection
  initialize (config) {
    return new Promise ((resolve, reject) => {
      instance = new Sequelize(
        config.database.db,
        config.database.username,
        config.database.password,
        {
          host: config.database.host,
          operatorsAliases: Sequelize.Op,
          dialect: 'mysql',
          pool: config.database.pool
        }
      )
      instance.authenticate().then(() => {
        resolve(instance)
      }).catch((e) => {
        reject(e)
      })
    })
  },
  /* Singleton */
  getInstance () {
    return instance
  }
}
