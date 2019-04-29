const apiCall = require("./api")


const initConversations = () => {
    console.log('iniside initConversations')
    const data = {
        "text": "select from the list..",
        "quick_replies": [
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

    apiCall('/message', data)
}

module.exports = { initConversations }