cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-beacon/www/client.js",
        "id": "cordova-plugin-beacon.client",
        "pluginId": "cordova-plugin-beacon",
        "clobbers": [
            "cordova.plugins.simplexpbeacon"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
        "id": "cordova-plugin-insomnia.Insomnia",
        "pluginId": "cordova-plugin-insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    },
    {
        "file": "plugins/cordova-plugin-insomnia/src/browser/Insomnia.js",
        "id": "cordova-plugin-insomnia.InsomniaProxy",
        "pluginId": "cordova-plugin-insomnia",
        "merges": [
            "window.plugins.insomnia"
        ]
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
}
// BOTTOM OF METADATA
});