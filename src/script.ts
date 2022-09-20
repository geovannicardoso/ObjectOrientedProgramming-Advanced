class Patinet {
  public  cor: string;
  public peso:number;
  public tamanho: number;

  public movimenta(){

  }

  constructor (cor:string, peso:number, tamanho:number){
    this.cor = cor;
    this.peso = peso;
    this.tamanho = tamanho;
  }
 }
const patinete =  new Patinet('parta',2.0,0.70);
patinete.movimenta ()

console.log(`\nA cor do patinete é: ${patinete.cor}`);
console.log(`\nO peso do patinete é: ${patinete.peso}`);
console.log(`\nO tamanho do patinete é: ${patinete.tamanho}`);
