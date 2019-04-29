const constants = require('./src/constants')
const initConversations = require('./src/util/messages').initConversations


module.exports.bot = async (event, context, callback) => {
    if(event.method == 'GET') {
        // facebook app verification
        if (event.query['hub.verify_token'] === constants.VERIFY_TOKEN && event.query['hub.challenge']) {
            console.log('challenge accepted')
            return callback(null, parseInt(event.query['hub.challenge']));
        } else {
            console.log('challenge not accepted')
            return callback('Invalid token');
        }
    }

    if(event.method == 'POST') {
        const webhook_events = event.body.entry[0];

        // detect standby - service
        if(webhook_events.standby) {
            console.log('secondary role')
        }


        if(webhook_events.messaging) {
            console.log('primary role')
            const messages = webhook_events.messaging
            
            messages.forEach(element => {
                const psid = element.psid
                const message = element.message
                const delivery = element.delivery

                // get type of message to reply for.
                if(message && message.postback) {
                    console.log('initConversations')
                    initConversations();
                } 
            })
        }
    }
};