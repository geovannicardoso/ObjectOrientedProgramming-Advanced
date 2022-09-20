var Paciente = /** @class */ (function () {
    function Paciente(nome, sexo, doença) {
        this.nome = nome;
        this.sexo = sexo;
        this.doença = doença;
    }
    Paciente.prototype.chorar = function () {
    };
    return Paciente;
}());
var paciente = new Paciente('Naruto', 'Masculino', 'RapasoDe9Caldas');
paciente.chorar();
console.log("Nome do paciente: ".concat(paciente.nome));
console.log("Sexo do paciente: ".concat(paciente.sexo));
console.log("Qual a doen\u00E7a: ".concat(paciente.doença));
