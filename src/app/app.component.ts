import { Component, OnInit} from '@angular/core'; //importation de OnInit
import { AppareilService } from './services/appareil.service'; //importation du service
import { interval } from 'rxjs-compat/observable/interval';
import { Observable, Subscription } from 'rxjs';
import { __values } from 'tslib';
//import 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { //implemetation de OnInit

    secondes: number=0; //variable qui servira a observer
    counterSubscription!: Subscription;
    constructor() {}

    ngOnInit() {
      //const counter = Observable.interval(1000); //
      const counter= interval(1000); //on cree un observable qui comptera le nbre de seconde de connexion du Use(s'incremente chauqe 1s)
      
      //methode permettante de creer un observeur
            /*counter.subscribe(
              //creation d'un observeur, qui recupere la valeur du compteur
              (value:number) => {
                console.log('value'+value);
                this.secondes = value;
              },
              //on gere une erreur declenchee sur l'observeur
                (error: any) =>{
                  console.log('une erreur a ete rencontree!');
                },
                //on gere lorsque l'observale est
                () =>{
                  console.log('Observable completee!');
                }

      ); */
      
      this.counterSubscription = counter.subscribe(
            (value:number) => {
              this.secondes = value;
            }
      );

    }


}
