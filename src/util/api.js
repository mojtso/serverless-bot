const request = require('request')
const constants = require('../constants')

const MessageApiCall = (path, payload, callback) => {
    
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
    })
}

const ProfileApiCall = (psid, cb) => {
    if(!path) {
        console.error('No endpoint specified on Profile send.')
        return
    } else if(!constants.PAGE_ACCESS_TOKEN) {
        console.error('No Page access token or graph API url configured.')
        return
    }

    const page_access_token = constants.PAGE_ACCESS_TOKEN
    const url = constants.GRAPH_URL + "/messenger_profile?fields=first_name,last_name&access_token="+ page_access_token


    // const path = "/v2.6/"+psid+"?fields=first_name,last_name,last_ad_referral,profile_pic&access_token="+ page_access_token

    request({
        uri: url,
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        json: payload
    }, (error, response, body) => {
        console.log('Body ->', body)
        if(error) {
            console.log(error)
            return cb(error, null)
        }

        cb(null, body)
    })

}


module.exports = {MessageApiCall, ProfileApiCall }