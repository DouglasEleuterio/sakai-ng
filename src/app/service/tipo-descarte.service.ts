import { Injectable } from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {TipoDescarteModel} from "../_model/tipo-descarte.model";
import {HttpClient} from "@angular/common/http";

const TIPO_DESCARTE_RESOURCE = 'tipo-descarte'

@Injectable({
  providedIn: 'root'
})
export class TipoDescarteService extends AutoCompleteService<TipoDescarteModel>{

  constructor(http: HttpClient) {
      super(http, TIPO_DESCARTE_RESOURCE)
  }
}
