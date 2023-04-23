import { Injectable } from '@angular/core';
import {FinanceiroFilter} from "../_model/financeiro-filter";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable, observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

    constructor(private http: HttpClient) { }

    public gerarRelatorio( filter: FinanceiroFilter | null) {
      return this.http.post(environment.apiUrl + `v2/relatorio/financeiro?dataDe=${filter?.search.dataPagamentoDe.toISOString().split("T")[0]}&dataAte=${filter?.search.dataPagamentoAte.toISOString().split("T")[0]}`, filter ,{observe: 'response', responseType: 'blob'});
      // return this.http.get(environment.apiUrl + 'v2/relatorio/financeiro');
  }
}
