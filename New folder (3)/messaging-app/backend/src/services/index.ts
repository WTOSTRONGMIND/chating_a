export class MessageService {
    private messages: any[] = [];

    public sendMessage(message: any): void {
        this.messages.push(message);
        // Logic to save the message to the database can be added here
    }

    public receiveMessages(): any[] {
        // Logic to retrieve messages from the database can be added here
        return this.messages;
    }
}