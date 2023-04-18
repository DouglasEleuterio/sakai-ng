import {EnderecoModel} from "./endereco.model";

export interface TransportadorModel {
    id: string
    nome: string
    razaoSocial: string
    cnpj: string
    endereco: EnderecoModel
}
