class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    if (amount <= 0) {
      return { success: false, message: "Quantidade inválida" };
    }

    console.log(`Processando $${amount} por cartão de crédito...`);

    return {
      success: true,
      message: "Pagamento por cartão de crédito aprovado",
    };
  }
}
