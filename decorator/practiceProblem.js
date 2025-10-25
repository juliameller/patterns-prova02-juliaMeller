class MessagePrinter {
  print(text) {
    console.log(text);
  }
}

class MessageDecorator {
  constructor(printer) {
    this.printer = printer;
  }

  print(text) {
    this.printer.print(text);
  }
}

class EmailMessage extends MessageDecorator {
  print(text) {
    super.print(text);
    console.log("E-mail:", text);
  }
}

class SMSMessage extends MessageDecorator {
  print(text) {
    super.print(text);
    console.log("SMS:", text);
  }
}

const printer = new SMSMessage(new EmailMessage(new MessagePrinter()));
printer.print("Olá, mundo!");
