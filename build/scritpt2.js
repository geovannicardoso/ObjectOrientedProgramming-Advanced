var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, cpf, valor) {
        this.nome = nome;
        this.cpf = cpf;
        this.valor = valor;
    }
    ContaBancaria.prototype.guardar = function () {
    };
    return ContaBancaria;
}());
var contaBacaria = new ContaBancaria('Geovanni', '12332112332', 1.200);
contaBacaria.guardar();
console.log("Qual o nome do cliente: ".concat(contaBacaria.nome));
console.log("Qual o cpf do cliente: ".concat(contaBacaria.cpf));
console.log("Qual o valor na conta: ".concat(contaBacaria.valor));
