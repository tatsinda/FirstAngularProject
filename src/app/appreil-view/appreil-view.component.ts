import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service'; //importation du service

@Component({
  selector: 'app-appreil-view',
  templateUrl: './appreil-view.component.html',
  styleUrls: ['./appreil-view.component.css']
})
export class AppreilViewComponent implements OnInit {

  lastUpdate = new Date();
      //simulation d'attente d'une donee pour
      //une communication asynchrone
     /* lastUpdate = new Promise(
        (resolve,reject) => {
        const date = new Date();
        setTimeout(
          () => {
          resolve(date);
          }, 2000
        );
        }
      )*/

     /* appareils = [
        {
          name: 'Machine a laver',
          status: 'eteint'
        },
        {
          name: 'Television',
          status: 'allumer'
        },
        {
          name: 'Ordinateur',
          status: 'eteint'
        }
      ];*/

      appareils: any;//type any pour n'importe quelle type de valeur
      
     /* appareilOne= "Machine a laver";
      appareilTwo= "Televicion";
      appareilThree = "Ordinateur";*/

         isAuth = false;//variable glonale
          //methode executee au demarrage du component
          //on integre le service dans le component par instanciation afin de l'user
          appareilSubscription!: Subscription; //pour acceder a la variable avec la porte private
          constructor(private appareilService:AppareilService)
          {
            //methode qui s'execute apres un nbre de seconde defenie
            setTimeout(
            () => {
            this.isAuth = true; //valeur de la variable apres le nbre de seonde
            }, 3000 //nbre de seconde
            );
          }
          //methode executer apres execution du contructeur pour recuperer les donnees du service
          ngOnInit()
          {
            //on ne peut plus acceder directeur a la donnee
            //this.appareils=this.appareilService.appareils; //recuperation des donnee du service
            
            //on fait une subscription pour copier la valeur
            this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
                (appareils:any[]) => {
                  this.appareils = appareils;
                }
            );
            this.appareilService.emitAppareilSubject(); //on emet la subscription
          }


          //Methode appeler apres click sur le bouton
          onAllumer()
          {
            console.log('On allume tout!');
            this.appareilService.switchOnAll();
          }

          onEteindre()
          {
            console.log('On allume tout!');
            this.appareilService.switchOffAll();
          }

}
