'use strict'

class LoginUser {
  get rules () {
    return {
      'email': 'required',
      'password': 'required'
    }
  }

  get messages() {
    return {
      required: '{{ field }} is required',
      unique: '{{ field }} already exists'
    }
  }
  
}

module.exports = LoginUser
