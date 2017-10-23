const fs = require('fs')
const yaml = require('js-yaml')

module.exports = {
  parseConfig (config) {
    return new Promise((resolve, reject) => {
      fs.readFile(config, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        }
        try {
          resolve(yaml.safeLoad(data))
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}
