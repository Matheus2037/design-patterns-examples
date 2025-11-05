// Princípio de Substituição de Liskov

function completeCheckout(processor, amount) {
  const result = processor.processPayment(amount);

  if (result.success) {
    console.log("✅ Pagamento bem-sucedido:", result.message);
  } else {
    console.log("❌ Pagamento falhou:", result.message);
  }
}

const credit = new CreditCardProcessor();
const crypto = new CryptoProcessor();

completeCheckout(credit, 100);
completeCheckout(crypto, 500);
