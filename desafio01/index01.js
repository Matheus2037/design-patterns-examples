class Lanche {
    constructor() {
      this.pao = null;
      this.carne = null;
      this.queijo = null;
      this.salada = null;
      this.molho = null;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
}

class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(pao) {
        this.lanche.pao = pao;
        return this;
    }

    setCarne(carne) {
        this.lanche.carne = carne;
        return this;
    }

    setQueijo(queijo) {
        this.lanche.queijo = queijo;
        return this;
    }

    setSalada(salada) {
        this.lanche.salada = salada;
        return this;
    }

    setMolho(molho) {
        this.lanche.molho = molho;
        return this;
    }

    build() {
        return this.lanche;
    }
}
  
//const lancheSimples = new Lanche(true, true, false, false, false);
//const lancheCompleto = new Lanche(true, true, true, true, true);
//lancheSimples.show();
//lancheCompleto.show();

class LancheDirector {
    static buildHamburguerGourmet() {
        return new LancheBuilder()
            .setPao("Brioche")
            .setCarne("Costela")
            .setQueijo("Mussarela")
            .setSalada("Rucula")
            .setMolho("Molho Stacker")
            .build();
    }

    static buildWhopper() {
        return new LancheBuilder()
            .setPao("Pão com Gergelim")
            .setCarne("Carne Bovina Grelhada")
            .setQueijo("American cheese derretido")
            .setSalada("Alface, tomate, cebola, picles ")
            .setMolho("Maionese, ketchup")
            .build();
    }

    static buildBigMac() {
        return new LancheBuilder()
            .setPao("Pão com Gergelim")
            .setCarne("Carne Bovina")
            .setQueijo("Americano")
            .setSalada("Sem Picles")
            .setMolho("Molho Escroto")
            .build();
    }
}

const hamburguerGourmet = LancheDirector.buildHamburguerGourmet();
const whopper = LancheDirector.buildWhopper();
const bigmac = LancheDirector.buildBigMac();


hamburguerGourmet.show();
whopper.show();
bigmac.show();