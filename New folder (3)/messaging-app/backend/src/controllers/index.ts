class IndexController {
    async getMessages(req, res) {
        // Logic to retrieve messages from the database
        res.send("Retrieve messages");
    }

    async sendMessage(req, res) {
        // Logic to send a message to the database
        res.send("Send message");
    }
}

export default IndexController;