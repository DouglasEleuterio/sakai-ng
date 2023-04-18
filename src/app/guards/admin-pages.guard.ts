import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../service/login.service";
import {ProfileTypeEnum} from "../_enums/profile.type.enum";

@Injectable({
  providedIn: 'root'
})
export class AdminPagesGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
      const user = JSON.parse(localStorage.getItem('user'))

    const check = true //todo implementar
    if(check) {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
