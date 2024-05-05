import {TipoProcedimento} from "./tipo-procedimento-model";

export class PacienteProcedimento {
    id?: number
    motivacao?: string
    data?: Date
    valor?: number
    satisfacao?: string
    procedimento?: TipoProcedimento

}
