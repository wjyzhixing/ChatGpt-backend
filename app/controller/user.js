const { Controller } = require('egg');

/**
 * @controller User 注册登录接口
 */
class UserController extends Controller {
  // 用户登录
  async login() {
    const { ctx } = this;
    const params = {
      account: ctx.request.body?.account || '',
      password: ctx.request.body?.password || 0,
    };
    ctx.body = await ctx.service.user.login(params);
  }
  // 用户注册
  async registry() {
    const { ctx } = this;
    const params = {
      account: ctx.request.body?.account || '',
      password: ctx.request.body?.password || '',
    };
    ctx.body = await ctx.service.user.registry(params);
  }
  // 查询用户信息
  async info() {
    const { ctx } = this;
    const params = {
      id: ctx.request.body?.id || '',
    };
    ctx.body = await ctx.service.user.info(params);
  }
  // 修改用户信息
  // async updateUserInfo() {
  //   const { ctx } = this;
  //   const params = {
  //     id: ctx.request.body?.id || '',
  //     account: ctx.request.body?.account || '',
  //     password: ctx.request.body?.password || '',
  //     email: ctx.request.body?.email || '',
  //     ifEmail: ctx.request.body?.ifEmail,
  //   };
  //   ctx.body = await ctx.service.user.updateUserInfo(params);
  // }
}

module.exports = UserController;
