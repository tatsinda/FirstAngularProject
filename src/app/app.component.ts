import { Component, OnInit} from '@angular/core'; //importation de OnInit
import { AppareilService } from './services/appareil.service'; //importation du service
import { Observable} from 'rxjs'; //importation d'un observable
//import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implemetation de OnInit

    secondes: number=0;
    constructor() {}

    ngOnInit() {
      //const counter = Observable.interval(1000); //
    }


}
