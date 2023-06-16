/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  config.jwt = {
    secret: '123456',
  };
  config.cors = {
    origin: 'http://localhost:5173',
    credentials: true,
    allowMethods: 'GET,POST',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1686641642761_9709';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // 单数据库配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'wjy19971220',
      // 数据库名
      database: 'chatgpt',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
