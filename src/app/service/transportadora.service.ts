import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AutoCompleteService} from "./auto-complete.service";
import {FormaPagamentoModel} from "../_model/forma-pagamento.model";

const TRANSPORTADORA_RESOURCE: string = 'transportador'

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService extends AutoCompleteService<FormaPagamentoModel> {

    constructor(http: HttpClient) {
        super(http, TRANSPORTADORA_RESOURCE);
    }
}
