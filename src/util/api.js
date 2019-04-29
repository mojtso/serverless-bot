const fetchUrl = require('fetch').fetchUrl
const constants = require('../constants')

const apiCall = (path, payload, callback) => {
    if(!path) {
        console.error('No endpoint specified on Messenger send.')
        return
    } else if(!constants.PAGE_ACCESS_TOKEN) {
        console.error('No Page access token or graph API url configured.')
        return
    }

    fetchUrl(constants.GRAPH_URL + path, {
        method: 'POST',
        qs: { 'access_token': constants.PAGE_ACCESS_TOKEN },
        body: payload
    }, (error, meta, body) => {
        if(error) {
            console.log(error)
            return
        }

        console.log(body)
    });

};

module.exports = apiCall