const Model = require('./Model')

function exist (val) {
  return typeof val !== 'undefined'
}

class TypeUser extends Model {
  constructor(data) {
    super()
    // default
    this.name = ''
    this.email = ''
    this.created_at = new Date()
    this.updated_at = new Date()

    this.set(data)
  }
}

module.exports = TypeUser
