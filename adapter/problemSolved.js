class Notifier {
    send(message) {
      console.log(`Notificação enviada: ${message}`);
    }
}
  
class SMSService {
    sendSMS(text) {
        console.log(`SMS enviado: ${text}`);
    }
}

class SMSServiceAdapter extends Notifier {
    constructor(smsService) {
        super();
        this.smsService = smsService;
    }

    send(message){
        this.smsService.sendSMS(message);
    }
}
  

function notifyUser(notifier, message) {
notifier.send(message);
}
  
const emailNotifier = new Notifier();
notifyUser(emailNotifier, "Bem-vindo ao sistema!");

// Tentando usar o SMSService diretamente (vai falhar)
const smsService = new SMSService();
// notifyUser(smsService, "Seu código é 1234");
  
const adaptedService = new SMSServiceAdapter(smsService);
notifyUser(adaptedService, "Teste");