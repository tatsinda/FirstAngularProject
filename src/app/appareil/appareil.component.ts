import { Component, Input ,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'; //importation du service


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string=''; //on cree une propriete personalisee et avec ce decorateur Input on recupere la valeur de la variable de facon dinamique depuis le componnent parent
  @Input() appareilStatus: string='' ;
  @Input() indexofAppareil: number=0;
  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

  getStatus()
  {
  return this.appareilStatus;
  }

  getColor()
  {
    if(this.appareilStatus === 'allumer'){
        return 'green';
    }
    else if(this.appareilStatus === 'eteint'){
        return 'red';
    }
    else{
      return '';
    }

    }

    onSwitchOn()
    {
      this.appareilService.switchOnOne(this.indexofAppareil);
    }
     onSwitchOff()
        {
          this.appareilService.switchOffOne(this.indexofAppareil);
        }



}
