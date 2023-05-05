import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

const PATH_URL_CTR = 'ctr/'

@Injectable({
  providedIn: 'root'
})
export class CtrService {

  constructor(private http: HttpClient) { }

  getCTR(id: string){
      this.http.get(environment.apiUrl)
  }

  salvarCTR(ctr: any): Observable<any> {
      return this.http.post(environment.apiUrl + PATH_URL_CTR + 'save', ctr)
  }
}
