 import { Injectable } from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {VeiculoModel} from "../_model/veiculo.model";
import {HttpClient} from "@angular/common/http";
 import {Observable} from "rxjs";
 import {environment} from "../../environments/environment.prod";

const VEICULO_RESOURCE = 'veiculo'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends AutoCompleteService<VeiculoModel>{

  constructor(http: HttpClient) {
      super(http, VEICULO_RESOURCE);
  }


    override loadAutoCompleteData(): Observable<VeiculoModel[]> {
        return this.http.get(environment.apiUrl +'v2/'+ VEICULO_RESOURCE + '/find-list-from-select') as Observable<VeiculoModel[]>
    }
}
