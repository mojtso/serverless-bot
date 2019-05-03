const messageApiCall = require('./api').MessageApiCall
const profileApiCall = require('./api').ProfileApiCall
const sendTypingOn = require('./senderActions').sendTypingOn
const markSeen = require('./senderActions').markSeen
const payloads = require('../payloads')

const initConversations = (psid) => {

    const payload = {
        recipient: {
            id: psid,
        },
        message: {
            text: payloads.initMessage[0].message,
        },
    }

    console.log('initConver')
    
    sendTypingOn(psid)
    setTimeout(()=> messageApiCall('/messages', payload), 3000)
   
}

const welcomeBack = (psid) => {
    const payload = {
        recipient: {
            id: psid,
        },
        message: {
            text: payloads.initMessage[1].message,
        },
    }
    
    sendTypingOn(psid)
    setTimeout(()=> messageApiCall('/messages', payload), 3000)
    
}

const sendTextMessage = (psid, payload) => {

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

    messageApiCall('/messages', payload)
}


module.exports = { initConversations, welcomeBack }