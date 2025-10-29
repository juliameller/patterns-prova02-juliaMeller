//Adapter
class LegacyPaymentSystem {
    makePayment(amount) {
      console.log(`Pagando R$${amount} com sistema legado.`);
    }
  }
  
  class ModernPaymentAPI {
    process(amountInCents) {
      console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
  }
  
  class ModernPaymentAdapter extends LegacyPaymentSystem {
    constructor(modernAPI) {
      super();
      this.modernAPI = modernAPI;
    }
  
    makePayment(amount) {
      const amountInCents = amount * 100;
      this.modernAPI.process(amountInCents);
    }
  }
  
  function pay(system, amount) {
    system.makePayment(amount);
  }
  
  // Cliente
  const modernAPI = new ModernPaymentAPI();
  const adaptedSystem = new ModernPaymentAdapter(modernAPI);
  pay(adaptedSystem, 100);
  