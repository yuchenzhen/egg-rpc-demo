
'use strict';

/** @type Egg.EggPlugin */
const plugin = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sofaRpc: {
    enable: true,
    package: 'egg-sofa-rpc'
  }
}
module.exports = plugin;

