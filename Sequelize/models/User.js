const Sequelize = require('sequelize')

module.exports = class User {
  constructor(sequelize) {
  // initialize the model
    this.model = sequelize.define('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    })

    // Create the table if doesn't exist
    this.model.sync()
  }
}
