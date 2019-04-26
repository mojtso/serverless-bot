const { apiCall } = require('./api')


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
    
    apiCall('/message', payload, (response) => {
        console.log(response);
    })
};

const sendTypingOff = (psid) => {

    if(!psid) { console.log('no psid from args'); return; };

    let payload = {
        recipient: {
            id: psid,
        },
    };
    
    apiCall('/message', payload, (response) => {
        console.log(response);
    })
};

export { sendTypingOn, sendTypingOff };