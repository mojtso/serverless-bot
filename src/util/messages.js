const apiCall = require("./api")


const initConversations = (psid) => {

    console.log('iniside initConversations')
    const payload = {
        recipient: {
            id: psid,
        },
        message: {
            text: "Hello World!",
        },
    }

    apiCall('/messages', payload, (response) => {
        console.log(response)
    })
}

module.exports = { initConversations }