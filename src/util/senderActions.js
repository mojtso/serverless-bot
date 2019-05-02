const api = require('./api')
/*
 * Turn typing indicator on
 *
 */

const sendTypingOn = (psid) => {

    if(!psid) { console.log('no psid from args'); return; };

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'typing_on',
    };
    
    api('/message', payload)
};

const sendTypingOff = (psid) => {

    if(!psid) { console.log('no psid from args'); return; };

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'typing_off',
    };
    
    api('/message', payload)
};

const markSeen = (psid) => {

    if(!psid) { console.log('no psid from args'); return; };

    let payload = {
        recipient: {
            id: psid,
        },
        sender_action: 'mark_seen',
    };
    
    api('/message', payload)
};



module.exports = { sendTypingOn, sendTypingOff, markSeen }