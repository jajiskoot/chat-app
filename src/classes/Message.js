import { v4 as uuidv4 } from 'uuid';

export default class Message {
    constructor(recipient, sender, text) {
        this.id = uuidv4();
        this.recipient = recipient;
        this.sender = sender;
        this.text = text;
    }
}
