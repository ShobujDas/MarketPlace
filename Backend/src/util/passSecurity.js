const bcrypt = require('bcrypt')

exports.encryptPass = async (pass) => {
  let password = await bcrypt.hashSync(pass, 12)
  return password
}

exports.comparePass = async (enPass, pass) => {
  let result = await bcrypt.compare(pass, enPass)
  return result
}