import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrigemService {

  constructor() { }

    loadAutoCompleteData(): Observable<string[]> {
     return Observable.create((observer: { next: (arg0: { nome: string; }[]) => void; }) => {
          observer.next([{nome: 'Todos'},{nome: 'CTR'}, {nome: 'Combo'}])
      })
    }
}
