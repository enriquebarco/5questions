'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');
const AnswerController = require('../app/Controllers/Http/AnswerController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// answers routes
Route.get('/', 'AnswerController.home');

//user signup
Route.on('/signup').render('auth.signup');
Route.post('/', 'UserController.create').validator('CreateUser');

//user login
Route.on('/login').render('auth.login');
Route.post('/login','UserController.login').validator('LoginUser');

//user logout
Route.get('/logout', async({ auth, response }) => {
    await auth.logout()
    return response.redirect('/')
})