class ContaBancaria{
    public nome: string;
    public cpf: number;
    public valor: number;
    
    public guardar(){
    }
    constructor(nome: string, cpf:number, valor:number){
        this.nome = nome;
        this.cpf = cpf;
        this.valor = valor;
    }

}
const contaBacaria = new ContaBancaria('Geovanni',12332112332,1.200);
contaBacaria.guardar();

console.log(`Qual o nome do cliente: ${contaBacaria.nome}`);
console.log(`Qual o cpf do cliente: ${contaBacaria.cpf}`);
console.log(`Qual o valor na conta: ${contaBacaria.valor}`);


