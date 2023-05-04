import { Injectable } from '@angular/core';
import {InstituicaoBancariaModel} from "../_model/instituicao-bancaria.model";
import {AutoCompleteService} from "./auto-complete.service";
import {HttpClient} from "@angular/common/http";

const INSTITUICAO_BANCARIA_RESOURCE: string = 'instituicao-bancaria'

@Injectable({
  providedIn: 'root'
})
export class InstituicaoBancariaService extends AutoCompleteService<InstituicaoBancariaModel> {

    constructor(http: HttpClient) {
        super(http, INSTITUICAO_BANCARIA_RESOURCE);
    }
}
