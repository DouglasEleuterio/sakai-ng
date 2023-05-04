import { Injectable } from '@angular/core';
import {AutoCompleteService} from "./auto-complete.service";
import {HttpClient} from "@angular/common/http";
import {MotoristaModel} from "../_model/motorista.model";

const MOTORISTA_RESOURCE = 'motorista'

@Injectable({
  providedIn: 'root'
})
export class MotoristaService extends AutoCompleteService<MotoristaModel>{

    constructor(http: HttpClient) {
        super(http, MOTORISTA_RESOURCE);
    }
}
