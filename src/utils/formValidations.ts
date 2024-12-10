export const validateEemail = (email: string) => {
  const trimmedEmail = email.trim()
  if (!trimmedEmail) return []

  const errors = []

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const isValidEmailFormat = emailRegex.test(trimmedEmail)

  if (!isValidEmailFormat) errors.push('Not a valid email format!')

  return errors
}

export const validatePassword = (password: string) => {
  if (!password) return []

  const errors = []

  if (password.length <= 6) errors.push('Password must be more than 6 characters')

  //if (!password.includes("@")) errors.push('Password must include @')


  return errors
}
