import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {PagamentoModel} from "../_model/pagamento.model";

const PATH_URL_PAGAMENTOS = 'pagamento/'

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  constructor(private http: HttpClient) { }

  public getAll(param: HttpParams): Observable<any> {
      return this.http.get(environment.apiUrl + PATH_URL_PAGAMENTOS + 'v2/find-list', {params: param})
  }

    atualizarPagamento(pagamento: PagamentoModel): Observable<any> {
        return this.http.put(environment.apiUrl + PATH_URL_PAGAMENTOS + 'atualizar/' + pagamento.id, pagamento)
    }
}
