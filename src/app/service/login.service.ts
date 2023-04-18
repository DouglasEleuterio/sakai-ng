import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {UserModel} from "../_model/user.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private userSubject: BehaviorSubject<UserModel | null>;
    public user: Observable<UserModel | null>;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!))
        this.user = this.userSubject.asObservable()
    }

    public get userValue() {
        return this.userSubject.value
    }

    public get token() {
        return localStorage.getItem('token')
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}authenticate`, {username, password})
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user.user))
                localStorage.setItem('token', user.idToken)
                localStorage.setItem('authorities', JSON.stringify(user.user.authorities))
                this.userSubject.next(user)
                return user;
            }), catchError(err => {
                return throwError(err);
            }))
    }

    logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('authorities')
        this.userSubject.next(null)
        this.router.navigate(['/auth/login'])
    }
}
