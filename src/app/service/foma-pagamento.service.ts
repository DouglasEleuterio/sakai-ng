import { Injectable } from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {HttpClient} from "@angular/common/http";
import {FormaPagamentoModel} from "../_model/forma-pagamento.model";

const FORMA_PAGAMENTO_RESOURCE: string = 'forma-pagamento'

@Injectable({
  providedIn: 'root'
})
export class FomaPagamentoService extends AutoCompleteService<FormaPagamentoModel> {

    constructor(http: HttpClient) {
        super(http, FORMA_PAGAMENTO_RESOURCE);
    }
}
