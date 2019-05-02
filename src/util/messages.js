const apiCall = require("./api")
const sendTypingOn = require('./senderActions').sendTypingOn
const markSeen = require('./senderActions').markSeen
 

const initConversations = (psid) => {

    const payload = {
        recipient: {
            id: psid,
        },
        message: {
            text: "Hi there...",
        },
    }

    setTimeout(()=> markSeen(psid), 100)
    sendTypingOn(psid)
    // setTimeout(()=> apiCall('/messages', payload), 100)
    setTimeout(() => sendQuickReply(psid, "select from the list..", "any", "istheralready", 500))

}

const sendQuickReply = (psid, text, title, postback_payload) => {

    let payload = {};
  
    payload.recipient = {
        id: psid
    }

    payload.message = {
        text: text,
        quick_replies: [
            {
                "content_type":"text",
                "title":"Movies",
                "payload": 0
            },
            {
                "content_type":"text",
                "title":"News",
                "payload": 1
            },
            {
                "content_type":"text",
                "title":"Todays weather",
                "payload": 2
            }

        ]    
    }

    apiCall('/messages', payload)
}


module.exports = { initConversations }