module.exports = class User {
  constructor () {
    this.model = User.model
  }

  static async initializeModel (connection) {
    User.model = connection.getInstance().define("ORMusers", {
      id: { type: 'serial', key: true },
      name: String,
      email: String,
      created_at: Date,
      updated_at: Date
    })
  }
}
