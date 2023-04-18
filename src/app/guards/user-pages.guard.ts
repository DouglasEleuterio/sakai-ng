import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../service/login.service";
import {ProfileTypeEnum} from "../_enums/profile.type.enum";

@Injectable({
  providedIn: 'root'
})
export class UserPagesGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger;
    const check = true//TODO IMPLEMENTAR
    if(check) {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }

}
