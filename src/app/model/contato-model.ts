export class ContatoModel {
    nome?: string
    numero?: string
    genero?: string
    dataNascimento?: Date

    constructor(nome?: string, numero?: string, genero?: string, dataNascimento?: Date) {
        this.nome = nome;
        this.numero = numero;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
    }
}
