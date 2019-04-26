const constants = require('./src/constants');



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

        //Bot service
        
    }

};