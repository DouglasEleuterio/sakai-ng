import {TipoProcedimento} from "./tipo-procedimento-model";

export class PacienteProcedimento {
    id?: number
    motivacao?: string
    satisfacao?: string
    valor?: number
    procedimento?: TipoProcedimento[]
    data?: Date

}
