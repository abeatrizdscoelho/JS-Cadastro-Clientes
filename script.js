function Cliente (nome, telefoneCelular, email, endereço) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereço = endereço;
    Object.defineProperty(this, 'setNome', {
        set: function (valor) {
            this.nome = valor;
        },
        get: function() {
            return this.nome;
        }
    })
    Object.defineProperty(this, 'informacoes', {
        get: function () {return '\n------------------\nInformações do Cliente: \n' + this.nome.toLowerCase()}
    })
}

function Telefone (ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
    Object.defineProperty(this, 'informacoes', {
        get: function () {
            return '\n------------------\nTelefone: \nDDD: ' + this.ddd + '\nNúmero: ' + this.numero
        }
    })
}

function Endereço (rua, numero, cidade, estado) {
    this.rua = rua.toLowerCase();
    this.numero = numero;
    this.cidade = cidade.toLowerCase();
    this.estado = estado.toUpperCase();
    Object.defineProperty(this, 'setRua', {
        set: function(valor) {
            this.rua = valor.toLowerCase();
        },
        get: function() {
            return this.rua;
        }
    })
    Object.defineProperty(this, 'setCidade', {
        set: function(valor) {
            this.cidade = valor.toLowerCase();
        },
        get: function() {
            return this.cidade;
        }
    })
    Object.defineProperty(this, 'setEstado', {
        set: function(valor) {
            this.estado = valor.toUpperCase();
        },
        get: function() {
            return this.estado;
        }
    })
    Object.defineProperty(this, 'informacoes', {
        get: function() {
            return '\n------------------\nEndereço: \n' + 'Rua: ' + this.rua + '\nNúmero: ' + this.numero + '\nCidade: ' + this.cidade + '\nEstado: ' + this.estado
        }
    })
}

function ordem(clientes) {
    return clientes.slice().sort((a, b) => a.nome.localeCompare(b.nome));
}

let clientes = [
    new Cliente('Elisa Carvalho', new Telefone('12', '987654321'), 'elisa.carvalho@gmail.com', new Endereço('Rua A', '123', 'São Paulo', 'SP')),
    new Cliente('Ana Souza', new Telefone('21', '923456789'), 'ana.souza@gmail.com', new Endereço('Rua B', '456', 'Rio de Janeiro', 'RJ')),
    new Cliente('Breno Mendes', new Telefone('31', '934567890'), 'breno.mendes@gmail.com', new Endereço('Rua C', '789', 'Belo Horizonte', 'MG'))
];

let clientesOrdenados = ordem(clientes)
clientesOrdenados.forEach(cliente => {
    console.log(cliente.informacoes)
    console.log(cliente.telefoneCelular.informacoes)
    console.log(cliente.endereço.informacoes)
})