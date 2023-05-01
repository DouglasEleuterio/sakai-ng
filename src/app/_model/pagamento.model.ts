import {FormaPagamentoModel} from "./forma-pagamento.model";
import {InstituicaoBancariaModel} from "./instituicao-bancaria.model";

export interface PagamentoModel{
    id?: string
    valor?: number
    formaPagamento?: FormaPagamentoModel | undefined
    dataPagamento?: Date
    instituicaoBancaria?: InstituicaoBancariaModel | undefined
}
