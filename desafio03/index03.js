// GRASP - POLYMORPHISM

  class CalculadoraFrete {
    calcular(distanciaEmKm) {
      throw new Error("Método calcular() deve ser implementado");
    }
  }
  
  class FreteNormal extends CalculadoraFrete {
    calcular(distanciaEmKm) {
      return distanciaEmKm * 2;
    }
  }
  
  class FreteExpresso extends CalculadoraFrete {
    calcular(distanciaEmKm) {
      return distanciaEmKm * 5; 
    }
  }
  
  class FreteService {
    constructor(calculadoraFrete) {
      this.calculadoraFrete = calculadoraFrete;
    }
  
    calcularFrete(distanciaEmKm) {
      return this.calculadoraFrete.calcular(distanciaEmKm); 
    }
  }
  
  function rodarVersaoCorretaPolymorphism() {
    console.log("\nGRASP - Polymorphism");
  
    const freteNormal = new FreteService(new FreteNormal());
    const freteExpresso = new FreteService(new FreteExpresso());
  
    console.log("Frete normal: R$", freteNormal.calcularFrete(10));
    console.log("Frete expresso: R$", freteExpresso.calcularFrete(10));
  }
  
  rodarVersaoCorretaPolymorphism();
  