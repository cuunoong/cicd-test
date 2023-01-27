function validatePassword( password = '' ) {
  // at least 8 character
  const validLength = password.length >= 8

  // has at least one letter
  let hasLetter = false
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  for (const letter of alphabets) {
    if (password.toLowerCase().includes(letter)) {
      hasLetter = true
      break
    }
  }

  // has at least one letter
  let hasNumber = false
  const numbers = '0123456789'
  for (const number of numbers) {
    if (password.includes(number)) {
      hasNumber = true
      break
    }
  }

  const validPassword = validLength && hasLetter && hasNumber
  return validPassword
}

module.exports = validatePassword
