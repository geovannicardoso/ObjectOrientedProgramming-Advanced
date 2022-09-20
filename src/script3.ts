class Paciente{
    public nome: string
    public sexo: string
    public doença: string

    public chorar(){

    }constructor(nome:string, sexo:string, doença: string){
        this.nome = nome;
        this.sexo = sexo;
        this.doença = doença;
     }

}
const paciente = new Paciente ('Naruto','Masculino','RapasoDe9Caldas');
paciente.chorar();

console.log(`Nome do paciente: ${paciente.nome}`);
console.log(`Sexo do paciente: ${paciente.sexo}`);
console.log(`Qual a doença: ${paciente.doença}`);

