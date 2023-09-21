'use strict';
const fs = require('fs');
const uuid = require('uuid');
const yaml = require('write-yaml');
const YYYYMMDD = require('./find_date').YYYYMMDD;
const TIMESTAMP = require('./find_date').TIMESTAMP;

module.exports = async (request) => {

  const Request_ID = uuid.v4();
  const requestStart = Date.now();

  const { rawHeaders, httpVersion, method, socket, url } = request;
  const { remoteAddress, remoteFamily } = socket;

  const obj_request = {
    id: Request_ID,
    timestamp: TIMESTAMP,
    rawHeaders,
    httpVersion,
    method,
    remoteAddress,
    remoteFamily,
    url,
    processingTime: Date.now() - requestStart,
    body: request.body
  };

  const json_data = JSON.stringify(obj_request) + "\n";
  
  yaml(`./storage/request_logs/${YYYYMMDD}_${Request_ID}_travis.yml`, obj_request, function(err) {
    if (err) throw err;
  });

  fs.appendFile(`./storage/request_logs/${YYYYMMDD}_daily_requests.log`, json_data, function (err) {
    if (err) throw err;
 });


};