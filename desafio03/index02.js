// SOLID - Interface Segregation Principle

class InterfaceComprar {
    comprarProduto() { }
}

class InterfaceCadastroProduto {
    cadastrarProduto() { }
}

class InterfaceEntrega {
    atualizarEntrega() { }
}

class ClienteComISP extends InterfaceComprar {
    comprarProduto() {
        console.log("Cliente realizou compra.");
    }
}

class VendedorComISP extends InterfaceCadastroProduto {
    cadastrarProduto() {
        console.log("Vendedor cadastrou produto.");
    }
}


class TransportadoraComISP extends InterfaceEntrega {
    atualizarEntrega() {
        console.log("Transportadora atualizou entrega.");
    }
}

console.log("SOLID - Interface Segregation Principle");

const clienteComISP = new ClienteComISP();
clienteComISP.comprarProduto();

const vendedorComISP = new VendedorComISP();
vendedorComISP.cadastrarProduto();

const transportadoraComISP = new TransportadoraComISP();
transportadoraComISP.atualizarEntrega();
