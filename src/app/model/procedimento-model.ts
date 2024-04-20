import {TipoProcedimento} from "./tipo-procedimento-model";

export class Procedimento {
    id: string
    procedimentos: TipoProcedimento[]
    date: Date
    valor: number
    satisfacao: number
    motivacao: string

    constructor(id?: string, procedimentos?: TipoProcedimento[], date?: Date, valor?: number, satisfacao?: number, motivacao?: string) {
        this.id = id;
        this.procedimentos = procedimentos
        this.date = date;
        this.valor = valor;
        this.satisfacao = satisfacao;
        this.motivacao = motivacao;
    }
}
