import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor() {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return true
    }
}
