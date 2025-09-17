class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class VeiculoLocomocaoFactory {
    static types = {
        bicicleta: Bicicleta,
        patinete: Patinete,
        onibus: Onibus
    };

    static createVeiculo(types) {
        const MovementClass = this.types[types];
        if (!MovementClass) {
        throw new Error("Tipo de veiculo locomotivo não identificado");
        }
        return new MovementClass();
    }
}
  
const tipo = ["bicicleta", "patinete", "onibus"];

try {
    tipo.forEach((types) => {
        const veiculo = VeiculoLocomocaoFactory.createVeiculo(types);
        console.log(veiculo.move(types, "R$ 500,00"));
    });
} catch (err) {
    console.error("Erro ao tentar se locomover...", err.message);
}