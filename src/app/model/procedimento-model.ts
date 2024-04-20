import {TipoProcedimento} from "./tipo-procedimento-model";

export class Procedimento {
    procedimentos: TipoProcedimento[]
    date: Date
    valor: number
    satisfacao: number
    motivacao: string
    constructor(procedimentos: TipoProcedimento[], date: Date, valor: number, satisfacao: number, motivacao: string) {
        this.procedimentos = procedimentos
        this.date = date;
        this.valor = valor;
        this.satisfacao = satisfacao;
        this.motivacao = motivacao;
    }
}
