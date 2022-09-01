import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importation pour faire la liaison a double sens
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppreilViewComponent } from './appreil-view/appreil-view.component'; //importation du service
import { RouterModule,Routes} from "@angular/router";
import { AuthService } from "./services/auth.service";

//creation des differentes de l'application
//on indique le path et le component de la route
//mais pas ncore integrer dans l'app
const appRoutes: Routes=[
  {path:'appareils',component: AppreilViewComponent },
  {path:'auth',component: AuthComponent},
  {path:'',component: AppreilViewComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppreilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //on charge l'import
    RouterModule.forRoot(appRoutes) //on intergre les routes dans l'app
  ],
  providers: [
    //on injecte le service creer
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
