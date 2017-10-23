var knex = require('knex')

module.exports = class User {
  // initialize the model
  initialize (connection) {
    this.model = connection.getBookshelfInstance().Model.extend({
      tableName: 'bookshelfusers',
      hasTimestamps: true,
    })
  }

  // Create the table if doesn't exist
  static async initializeModel(connection) {
    return new Promise ((resolve, reject) => {
      connection.getKnexInstance().schema.createTableIfNotExists('bookshelfusers', function (table) {
        table.increments()
        table.string('name')
        table.string('email', 128)
        table.timestamps()
      }).then((successResponse) => {
        resolve(successResponse)
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  }
}
