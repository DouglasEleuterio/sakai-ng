import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

const PATH_URL_PAGAMENTOS = 'pagamento/v2/find-list'

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  constructor(private http: HttpClient) { }

  public getAll(param: HttpParams): Observable<any> {
      return this.http.get(environment.apiUrl + PATH_URL_PAGAMENTOS, {params: param})
  }
}
