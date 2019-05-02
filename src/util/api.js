// const fetchUrl = require('fetch').fetchUrl
const request = require('request')
const https = require('https')
const constants = require('../constants')

const apiCall = (path, payload, callback) => {
    console.log('inside apiCall')
    if(!path) {
        console.error('No endpoint specified on Messenger send.')
        return
    } else if(!constants.PAGE_ACCESS_TOKEN) {
        console.error('No Page access token or graph API url configured.')
        return
    }

    const page_access_token = constants.PAGE_ACCESS_TOKEN
    const url = constants.GRAPH_URL + path + "?access_token=" + page_access_token
    
    request({
        uri: url,
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        json: payload
    }, (error, response, body) => {
        if(error) {
            console.log(error)
            return
        }
    });

};

module.exports = apiCall