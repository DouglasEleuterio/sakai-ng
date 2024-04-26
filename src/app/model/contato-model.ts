import {PacienteProcedimento} from "./paciente-procedimento-model";

export class ContatoModel {
    id?: number
    name?: string
    phone?: string
    genero?: string
    dataNascimento?: Date
    procedimentos?: PacienteProcedimento[]

    constructor(nome?: string, numero?: string, genero?: string, dataNascimento?: Date) {
        this.name = nome;
        this.phone = numero;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
    }
}
