// Tipagem de Dados #01
// tsc aula1

class Default{
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: any[];

constructor(){
    this.metodo;
}
metodo(){
    this.numero = 10;
    this.texto  = `Hellow World! ${this.numero}`
    return alert(this.texto);
}
}