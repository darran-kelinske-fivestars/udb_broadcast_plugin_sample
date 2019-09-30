cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dgram.dgram",
      "file": "plugins/cordova-plugin-dgram/www/dgram.js",
      "pluginId": "cordova-plugin-dgram",
      "clobbers": [
        "dgram"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-dgram": "0.1.5"
  };
});