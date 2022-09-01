import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service"; //importation du service Auth

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean=false;
  //Instanciation du service auth
  constructor(private authService: AuthService) { }
  //initialisation
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
//creation de methode de connexion
  onSignIn() {
    this.authService.signIn().then(
                 () => {
         console.log('connexion reussie');
         this.authStatus = this.authService.isAuth;
                 }
    );
  }
//creation de la methode de deconnexion
  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
