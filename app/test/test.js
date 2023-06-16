const path = require('path');
const Alipay = require('alipay-node-sdk');

const outTradeId = Date.now().toString();

/**
 *
 * @param {Object} opts
 * @param {String} opts.appId  支付宝的appId
 * @param {String} opts.notifyUrl  支付宝服务器主动通知商户服务器里指定的页面http/https路径
 * @param {String} opts.rsaPrivate  商户私钥pem文件路径
 * @param {String} opts.rsaPublic  支付宝公钥pem文件路径
 * @param {String} opts.signType   签名方式, 'RSA' or 'RSA2'
 * @param {Boolean} [opts.sandbox] 是否是沙盒环境
 * @class
 */
const ali = new Alipay({
  appId: '2021004100663540',
  // notifyUrl: 'http://www.xxx.com/callback/alipay',
  rsaPrivate: path.resolve('./pem/temp_sec_key.pem'),
  rsaPublic: path.resolve('./pem/temp_pub_key.pem'),
  // sandbox: true,
  signType: 'RSA',
});

const params = ali.wapPay({
  subject: '测试商品',
  body: '测试商品描述',
  outTradeId,
  timeout: '10m',
  amount: '10.00',
  goodsType: '0',
});
console.log(params);
