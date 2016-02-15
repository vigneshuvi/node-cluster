/*
 * Author:     Priya 
 * Copyright:  Priya
 * Date:	   15/02/2016
 * This file contains the load test environment.
 */

'use strict';

var loadtest = require('loadtest');
 
function statusCallback(latency, result) {
    console.log('Current latency %j, result %j', latency, result);
}
 
var options = {
    url: 'http://localhost:3000',
    maxRequests: 1000,
    statusCallback: statusCallback
};
 
loadtest.loadTest(options, function(error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});