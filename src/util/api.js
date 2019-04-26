const fetchUrl = require('fetch').fetchUrl;
const constants = require('../constants');

const apiCall = (path, path, callback) => {
    if(!path) {
        console.error('No endpoint specified on Messenger send.');
        return;
    } else if(!constants.PAGE_ACCESS_TOKEN) {
        console.error('No Page access token or graph API url configured.');
        return;
    }

    fetchUrl(constants.GRAPH_URL, {
        method: 'POST'
    }, (error, meta, body) => {
        if(error) return;

        console.log(body);
    });

};

export { apiCall };