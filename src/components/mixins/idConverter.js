/**
 * User: Liam Dickson
 * Date: 6/18/15
 * Time: 5:06 PM
 */

'use strict';

module.exports = {
    convertToID: function (env, service, hrDate) {
        var date = new Date(hrDate);
        var epoch = date.getTime()/1000.0;
        return env+'-'+service+'-'+epoch;
    },
    hrToEpoch: function (hrDate) {
        var date = new Date(hrDate);
        var epoch = date.getTime()/1000.0;
        return epoch.toString();
    }
};