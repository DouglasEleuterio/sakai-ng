import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AutoCompleteService} from "./auto-complete.service";
import {FormaPagamentoModel} from "../_model/forma-pagamento.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {TransportadorModel} from "../_model/transportador.model";

const TRANSPORTADORA_RESOURCE: string = 'transportador'

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService extends AutoCompleteService<FormaPagamentoModel> {

    constructor(http: HttpClient) {
        super(http, TRANSPORTADORA_RESOURCE);
    }

    override loadAutoCompleteData(): Observable<TransportadorModel[]> {
        return this.http.get(environment.apiUrl +'v2/'+ TRANSPORTADORA_RESOURCE + '/find-list-from-select') as Observable<TransportadorModel[]>
    }
}
