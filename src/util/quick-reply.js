const api = require('./api');


const sendQuickReply = (psid, text, title, data) => {
    let payload = {
        id: psid,
        message: {
            text
        }
    }
}