'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg = require('egg');
const { Configuration, OpenAIApi } = require('openai');

/**
 * Test Service
 */
class Chatgpt extends egg.Service {
  /**
   * chatgpt
   */

  async completions(params) {
    const { ctx, app } = this;
    params.apiKey = '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';
    const configuration = new Configuration({
      apiKey: params?.apiKey,
    });
    const openai = new OpenAIApi(configuration);
    try {
      const res = await openai.createCompletion({
        // model: 'text-davinci-003',
        model: params?.model,
        prompt: `Q:${params?.text}\nA:`,
        temperature: 0.9,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['\n'],
      });
      console.log('res', res?.data);
      return ctx.helper.json(
        { msg: res?.data?.choices[0]?.text },
        0,
        'success',
      );
      // return ctx.helper.json('查询失败', 1, '查询失败');
    } catch (err) {
      console.log(1);
      return ctx.helper.json(JSON.stringify(err));
    }
  }
}
exports.default = Chatgpt;
