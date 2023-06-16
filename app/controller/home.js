'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { app } = this;
    const result = await app.mysql.query('SELECT * FROM test_table');
    console.log(result);

    this.ctx.body = result;
  }
}

module.exports = HomeController;
