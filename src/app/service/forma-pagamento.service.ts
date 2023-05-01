import {Injectable} from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {HttpClient} from "@angular/common/http";
import {FormaPagamentoModel} from "../_model/forma-pagamento.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

const FORMA_PAGAMENTO_RESOURCE: string = 'forma-pagamento'

@Injectable({
    providedIn: 'root'
})
export class FormaPagamentoService extends AutoCompleteService<FormaPagamentoModel>{

    constructor(http: HttpClient) {
        super(http, FORMA_PAGAMENTO_RESOURCE);
    }

    public findList(): Observable<any> {
        return this.http.get(environment.apiUrl + `${FORMA_PAGAMENTO_RESOURCE}/find-list`)
    }
}
