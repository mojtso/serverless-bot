const messageApiCall = require('./api').MessageApiCall
/*
 * Turn typing indicator on
 *
 */

const sendTypingOn = (psid) => {

    if(!psid) { console.log('no psid from args'); return; }

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'typing_on',
    };
    
    messageApiCall('/message', payload)
};

const sendTypingOff = (psid) => {

    if(!psid) { console.log('no psid from args'); return; }

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'typing_off',
    };
    
    messageApiCall('/message', payload)
};

const markSeen = (psid) => {

    if(!psid) { console.log('no psid from args'); return; }

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'mark_seen',
    };
    
    messageApiCall('/message', payload)
};



module.exports = { sendTypingOn, sendTypingOff, markSeen }