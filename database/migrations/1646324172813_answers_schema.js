'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.string('answer1')
      table.string('answer2')
      table.string('answer3')
      table.string('answer4')
      table.string('answer5')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
