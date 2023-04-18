import {TransportadorModel} from './transportador.model';

export interface VeiculoModel {
    id: string
    marca: string
    modelo: string
    placa: string
    ativo: boolean
    transportador: TransportadorModel

}
