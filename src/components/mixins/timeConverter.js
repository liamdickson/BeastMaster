/**
 * User: Liam Dickson
 * Date: 6/18/15
 * Time: 5:06 PM
 */

'use strict';

module.exports = {
    hrToEpoch: function (hr){
        var date = new Date(hr);
        var epoch = date.getTime()/1000.0;
        return epoch.toString();
    }
};