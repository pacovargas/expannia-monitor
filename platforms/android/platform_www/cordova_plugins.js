cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-beacon.client",
    "file": "plugins/cordova-plugin-beacon/www/client.js",
    "pluginId": "cordova-plugin-beacon",
    "clobbers": [
      "cordova.plugins.simplexpbeacon"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-beacon": "1.1.0",
  "cordova-plugin-device": "2.0.0",
  "cordova-plugin-background-mode": "0.7.2"
};
// BOTTOM OF METADATA
});