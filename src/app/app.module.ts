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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from "./services/auth-guard.service";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
//creation des differentes de l'application
//on indique le path et le component de la route
//mais pas ncore integrer dans l'app
const appRoutes: Routes=[
  //integration du canActivate pour surveiller la route via le service AuthGuard
  {path:'appareils', canActivate: [AuthGuard], component: AppreilViewComponent },
  {path:'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  {path:'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path:'auth',component: AuthComponent},
  {path:'',component: AppreilViewComponent},
  {path:'not-found',component: FourOhFourComponent},
  {path:'**', redirectTo: '/not-found'},// configuration d'une redirection en cas de route introuvable vers le path /not-found




];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppreilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //on charge l'import
    RouterModule.forRoot(appRoutes), //on intergre les routes dans l'app
    
  ],
  providers: [
    //on injecte le service creer
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
