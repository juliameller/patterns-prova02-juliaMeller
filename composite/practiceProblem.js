// Componente base
class PanelSystemItem {
  draw() {
    throw new Error("Método abstrato!");
  }
}

// Componentes simples
class Button extends PanelSystemItem {
  constructor(label) {
    super();
    this.label = label;
  }

  draw() {
    console.log(`Botão: [${this.label}]`);
  }
}

class Text extends PanelSystemItem {
  constructor(content) {
    super();
    this.content = content;
  }

  draw() {
    console.log(`Texto: "${this.content}"`);
  }
}

class Panel extends PanelSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  draw() {
    console.log(`Painel: ${this.name}`);
    this.children.forEach((child) => child.draw());
  }
}

const button1 = new Button("Entrar");
const button2 = new Button("Cancelar");
const text1= new Text("Tela de Login");
const text2= new Text("Versão 1.0.0");

const loginPanel = new Panel("Painel de Login");
loginPanel.add(text1);
loginPanel.add(button1);
loginPanel.add(button2);

const mainPanel = new Panel("Janela Principal");
mainPanel.add(loginPanel);
mainPanel.add(text2);

mainPanel.draw();
