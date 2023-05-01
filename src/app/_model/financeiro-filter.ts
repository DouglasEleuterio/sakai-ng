import {InstituicaoBancariaModel} from "./instituicao-bancaria.model";

export interface FinanceiroFilter {
    sort: string
    page: number
    search: {
        ativo: boolean | null
        formaPagamento: { id: string | null}
        instituicaoBancaria: InstituicaoBancariaModel[],
        dataPagamentoDe: Date | null
        dataPagamentoAte: Date | null
        origem: string
        ctr: { numero: number | null }
        transportadora: { id: string | null }
    }
}
