import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export abstract class AutoCompleteService<T> {

  constructor(protected http: HttpClient,
              protected resourcePath: string) {
  }

  loadAutoCompleteData(): Observable<T[]> {
      return this.http.get(environment.apiUrl + this.resourcePath) as Observable<T[]>
  }
}
