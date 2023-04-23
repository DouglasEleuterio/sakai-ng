export interface FinanceiroFilter {
    sort: string
    page: number
    search: {
        ativo: boolean | null
        formaPagamento: { id: string }
        instituicaoBancaria: [
            { id: string, nome: string }
        ]
        dataPagamentoDe: Date
        dataPagamentoAte: Date
        origem: string
        ctr: { numero: number | null }
    }
}
