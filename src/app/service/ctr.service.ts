import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

const PATH_URL_CTR = ''

@Injectable({
  providedIn: 'root'
})
export class CtrService {

  constructor(private http: HttpClient) { }

  getCTR(id: string){
      this.http.get(environment.apiUrl)
  }
}
