cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-beacon.client",
    "file": "plugins/cordova-plugin-beacon/www/client.js",
    "pluginId": "cordova-plugin-beacon",
    "clobbers": [
      "cordova.plugins.simplexpbeacon"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-beacon": "1.1.0"
};
// BOTTOM OF METADATA
});