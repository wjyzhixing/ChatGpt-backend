'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg = require('egg');
/**
 * Test Service
 */
class User extends egg.Service {
  // /**
  //  * 登录
  //  */
  async login(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await app.mysql.query(
        `SELECT * FROM user where account = "${params?.account}" and password = "${params?.password}"`,
      );
      console.log(results);
      if (results?.length !== 0) {
        const token = app.jwt.sign(
          {
            account: params.account,
          },
          app.config.jwt.secret,
        );
        return ctx.helper.json({ token, id: results[0]?.id }, 0, 'success');
      }
      return ctx.helper.json('登录失败', 1, '登录失败，请检查您的信息');
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 注册
   * @param params
   */
  async registry(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await app.mysql.query(
        `SELECT * FROM user where account = "${params?.account}"`,
      );
      if (results?.length !== 0) {
        return ctx.helper.json('用户名已注册', 1, '用户名已注册');
      }
      try {
        await app.mysql.insert('user', {
          account: params?.account,
          password: params?.password,
          integral: 0,
          create_time: new Date(),
        });
        return ctx.helper.json('注册成功', 0);
      } catch (err) {
        return ctx.helper.json(JSON.stringify(err));
      }
    } catch (err) {
      console.log(err);
      return ctx.helper.json(JSON.stringify(err));
    }
  }
  // /**
  //  * 查看个人信息
  //  */
  async info(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await app.mysql.query(
        `SELECT * FROM user where id = "${params?.id}"`,
      );
      return ctx.helper.json(results[0], 0);
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
  //   /**
  //  * 修改个人信息
  //  */
  //    async updateUserInfo(params) {
  //     const { ctx, app } = this;
  //     // console.log(app.mongoose.Types);
  //     try {
  //         await ctx.model.User.updateOne({
  //           _id: app.mongoose.Types.ObjectId(params?.id),
  //         }, {
  //           // account: params?.account,
  //           password: params?.password,
  //           email: params?.email,
  //           ifEmail: params?.ifEmail
  //         });
  //         return ctx.helper.json(results);
  //     } catch (err) {
  //       return ctx.helper.json(JSON.stringify(err));
  //     }
  //   }
}
exports.default = User;
