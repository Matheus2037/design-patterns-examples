class ServicoEmail {
  enviar(usuario, mensagem) {
    console.log(`Enviando EMAIL para ${usuario.email}: ${mensagem}`);
  }
}

class ServicoSMS {
  enviar(usuario, mensagem) {
    console.log(`Enviando SMS para ${usuario.telefone}: ${mensagem}`);
  }
}

class ServicoPedido {
  constructor(servicoNotificacao) {
    this.servicoNotificacao = servicoNotificacao;
  }

  finalizarPedido(usuario, pedido) {
    console.log(`Processando pedido ${pedido.id} para ${usuario.nome}...`);
    this.servicoNotificacao.enviar(usuario, "Seu pedido foi confirmado!");
  }
}

const usuario = { nome: "Bia", email: "bia@exemplo.com", telefone: "9999-8888" };
const pedido = { id: 456 };

const notificadorEmail = new ServicoEmail();
const servicoComEmail = new ServicoPedido(notificadorEmail);
servicoComEmail.finalizarPedido(usuario, pedido);

console.log("---");

const notificadorSMS = new ServicoSMS();
const servicoComSMS = new ServicoPedido(notificadorSMS);
servicoComSMS.finalizarPedido(usuario, pedido);