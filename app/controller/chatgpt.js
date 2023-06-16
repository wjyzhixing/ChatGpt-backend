'use strict';

const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');
/**
 * @controller Chat gpt调用
 */
class ChatController extends Controller {
  // 用户登录
  async completions() {
    const { ctx } = this;
    // console.log(ctx.request.body)
    // if(ctx.request.body.param1 === 'server') {
    //   await new Promise(resolve => setTimeout(resolve, 15000));
    // }

    const params = {
      text: ctx.request.body?.prompt || '',
      model: ctx.request.body?.options?.model || '',
      // apiKey: ctx.request.body?.apiKey || ''
    };
    ctx.body = await ctx.service.chatgpt.completions(params);
  }
}

module.exports = ChatController;
