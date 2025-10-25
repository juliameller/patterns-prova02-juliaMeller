// Interface interna do sistema
class Notifier {
  send(message) {
    console.log(`Notificação enviada: ${message}`);
  }
}

// Biblioteca externa (incompatível com o sistema)
class SMSService {
  sendSMS(text) {
    console.log(`SMS enviado: ${text}`);
  }
}

// Adapter
class SMSServiceAdapter extends Notifier {
  constructor(smsService) {
    super();
    this.smsService = smsService;
  }

  send(message) {
    this.smsService.sendSMS(message);
  }
}

// Cliente
function notifyUser(notifier, message) {
  notifier.send(message);
}

// Testando com o Notifier interno
const emailNotifier = new Notifier();
notifyUser(emailNotifier, "Bem-vindo ao sistema!");

const smsService = new SMSService();
const adaptedService = new SMSServiceAdapter(smsService);
notifyUser(adaptedService, "Seu código é 1234");
