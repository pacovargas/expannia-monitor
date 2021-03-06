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
  },
  {
    "id": "cordova-plugin-insomnia.Insomnia",
    "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
    "pluginId": "cordova-plugin-insomnia",
    "clobbers": [
      "window.plugins.insomnia"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-beacon": "1.1.0",
  "cordova-plugin-device": "2.0.0",
  "cordova-plugin-background-mode": "0.7.2",
  "cordova-plugin-insomnia": "4.3.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-geolocation": "3.0.0"
};
// BOTTOM OF METADATA
});