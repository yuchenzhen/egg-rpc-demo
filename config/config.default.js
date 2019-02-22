'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_12345687',
  };

  config.rpc = {
    registry: {
      address: '127.0.0.1:2181', // 根据实际情况配置
    },
    server: {
      namespace: 'com.alipay.sofa.rpc.protobuf',
      codecType: 'protobuf',
    },
  };

  return config;
};
