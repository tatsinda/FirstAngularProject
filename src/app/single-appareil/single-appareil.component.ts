import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'; //importation du service
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';
  //id : string = '';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; //on recupere l'id dans la requette
    this.name = this.appareilService?.getAppareilById(+id)?.name!;
    this.status = this.appareilService?.getAppareilById(+id)?.status!;
  }

}
