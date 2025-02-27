var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAnalytics";

module.exports = {
    logEvent: function(name, params) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "logEvent", [name, params || {}]);
        });
    },
    setUserId: function(userId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setUserId", [userId]);
        });
    },
    setUserProperty: function(name, value) {
        return new Promise(function(resolve, reject) {
            if (typeof name !== "string") {
                return reject(new TypeError("User property name must be a string"));
            }

            if (typeof value !== "string") {
                return reject(new TypeError("User property value must be a string"));
            }

            exec(resolve, reject, PLUGIN_NAME, "setUserProperty", [name, value]);
        });
    },
    resetAnalyticsData: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "resetAnalyticsData", []);
        });
    },
    setEnabled: function(enabled) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setEnabled", [enabled]);
        });
    },
    setCurrentScreen: function(name) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setCurrentScreen", [name]);
        });
    },
    setDefaultEventParameters: function(defaults) {
        return new Promise(function(resolve, reject) {
            if (typeof defaults !== "object") {
                return reject(new TypeError("Defaults must be an object"));
            }

            exec(resolve, reject, PLUGIN_NAME, "setDefaultEventParameters", [defaults || {}]);
        });
    },
    requestTrackingAuthorization: function(success, error, showInformation, title, message, buttonTitle) {
        return new Promise(function(resolve, reject) {

            if(showInformation) {
                if (typeof title !== "string") {
                    return reject(new TypeError("Title property name must be a string"));
                }
    
                if (typeof message !== "string") {
                    return reject(new TypeError("Message property value must be a string"));
                }
    
                if (typeof buttonTitle !== "string") {
                    return reject(new TypeError("Button title property value must be a string"));
                }
            }

            exec(resolve, reject, PLUGIN_NAME, "requestTrackingAuthorization", [showInformation, title, message, buttonTitle]);
        });
    }
};
