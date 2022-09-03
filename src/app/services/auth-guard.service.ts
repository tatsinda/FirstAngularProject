//creation de la garde d'authentifcation pour la veridication des route du User

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import { AuthService } from "../services/auth.service"; //importation du service Auth


@Injectable() //decorateur permettant a un service d'importer un autre
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private router: Router) {}

    //redefinition de la methode
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
        //logique de la garde
        if(this.authService.isAuth){
          return true;
        } else{
          //on redirige le User vers la route d'auth en cas de non authentification
          this.router.navigate(['/auth']);
          return false;
        }
      }
}
