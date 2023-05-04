 import { Injectable } from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {VeiculoModel} from "../_model/veiculo.model";
import {HttpClient} from "@angular/common/http";

const VEICULO_RESOURCE = 'veiculo'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends AutoCompleteService<VeiculoModel>{

  constructor(http: HttpClient) {
      super(http, VEICULO_RESOURCE);
  }
}
