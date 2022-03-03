'use strict'

class CreateAnswer {
  get rules () {
    return {
      'Q1': 'required',
      'Q2': 'required',
      'Q3': 'required',
      'Q4': 'required',
      'Q5': 'required',
    }
  }

  get messages() {
    return {
      required: '{{ field }} is required'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();

      return this.ctx.response.redirect('back');
  }

}

module.exports = CreateAnswer
