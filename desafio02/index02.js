// Componente base
class TaskSystemItem {
    showDetails() {
      throw new Error("Método abstrato!");
    }
}

// Folha
class Task extends TaskSystemItem {
    constructor(name) {
      super();
      this.name = name;
    }
  
    showDetails(indent = "") {
      console.log(`${indent} * ${this.name}`);
    }
}

// Composite
class Project extends TaskSystemItem {
    constructor(name) {
      super();
      this.name = name;
      this.items = [];
    }
  
    add(item) {
      this.items.push(item);
    }
  
    showDetails(indent = "") {
      console.log(`${indent} * ${this.name}`);
      this.items.forEach((item) => item.showDetails(indent + "   "));
    }
}

  
// Cliente
const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const t3 = new Task("Configurar PIPELINE");
const t4 = new Task("Testar PIPELINE");

const subTask = new Project("PipeLine");
subTask.add(t3);
subTask.add(t4);

const p = new Project("Lançamento v1.0");
p.add(t1);
p.add(t2);
p.add(subTask);

p.showDetails();
  