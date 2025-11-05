class CryptoProcessor extends PaymentProcessor {
    processPayment(amount) {
      if (amount <= 0) {
        return { success: false, message: "Quantidade inválida" };
      }
  
      console.log(`Processando $${amount} por criptomoeda...`);
      return { success: true, message: "Transação de criptomoeda aprovada" };
    }
  }
  