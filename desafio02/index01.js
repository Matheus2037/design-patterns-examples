// BASE
class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
} 

// Decorator base
class MessageDecorator {
    constructor(message) {
      this.message = message;
    }
  
    getText(text) {
      this.message.getText(text);
    }
}


// Decorator concreto: envia mensagem no Whatsapp
class WhatsappMessage extends MessageDecorator {
    getText(text) {
        super.getText(text);
        console.log("Enviando mensagem no Whatsapp:", text);
    }
}

// Decorator concreto: envia mensagem no Discord
class DiscordMessage extends MessageDecorator {
    getText(text) {
        super.getText(text);
        console.log("Enviando mensagem no Discord:", text);
    }
}


// Cliente: empilha os decoradores
const message = new WhatsappMessage(new DiscordMessage(new Message()));
message.getText("Mensagem enviada com sucesso!");