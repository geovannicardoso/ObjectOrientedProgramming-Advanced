var Patinet = /** @class */ (function () {
    function Patinet(cor, peso, tamanho) {
        this.cor = cor;
        this.peso = peso;
        this.tamanho = tamanho;
    }
    Patinet.prototype.movimenta = function () {
    };
    return Patinet;
}());
var patinete = new Patinet('parta', 2.0, 0.70);
patinete.movimenta();
console.log("\nA cor do patinete \u00E9: ".concat(patinete.cor));
console.log("\nO peso do patinete \u00E9: ".concat(patinete.peso));
console.log("\nO tamanho do patinete \u00E9: ".concat(patinete.tamanho));
