const TypeUser = require('../models/TypeUser')

module.exports = {
  target: TypeUser,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    email: {
      type: 'varchar'
    },
    created_at: {
      type: 'date'
    },
    updated_at: {
      type: 'date'
    }
  },
  relations: {}
}
