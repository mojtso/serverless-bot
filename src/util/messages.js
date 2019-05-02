const apiCall = require("./api")
const sendTypingOn = require('./senderActions').sendTypingOn
const markSeen = require('./senderActions').markSeen
 

const initConversations = (psid) => {

    const payload = {
        recipient: {
            id: psid,
        },
        message: {
            text: "Hello World!",
        },
    }

    sendTypingOn(psid)
    setTimeout(()=> apiCall('/messages', payload), 500)
    setTimeout(()=> markSeen(psid), 800)

}

const sendQuickReply = (psid, text, title, postback_payload) => {

    let payload = {};
  
    payload.recipient = {
        id: psid
    }

    payload.message = {
        text: text,
        quick_replies: [{
            content_type: 'text',
            title: title,
            payload: postback_payload
        }]    
    }

    api.call('/messages', payload)
}


module.exports = { initConversations }