import { Subject } from "rxjs"; //obsevable Subject, pour definir les donnees a emttre et un niveau d'abstraction de notre code

//creation du service appareil
export class AppareilService{
  
  appareilSubject = new Subject<any[]>(); //creation d'un Subject



  private appareils = [
        {
          id: 1,
          name: 'Machine a laver',
          status: 'eteint'
        },
        {
          id: 2,
          name: 'Television',
          status: 'allumer'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'eteint'
        }
      ];
  //methode permettante d'emettre une copie de la liste des appreils dpuis l'exterieur
  emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
      }

   getAppareilById(id: number){
      const appareil = this.appareils.find(
                  (appareilObject) =>{
                  return appareilObject.id === id;
                  }
                  );
      return appareil;
   }

   switchOnAll(){
      for(let appareil of this.appareils)
        {
          appareil.status= 'alumee';
        }
        this.emitAppareilSubject(); //on fait emettre le subject afin de permettre au component qui lui son souscrit
   }

   switchOffAll(){
         for(let appareil of this.appareils)
           {
             appareil.status= 'eteint';
           }
           this.emitAppareilSubject(); //on fait emettre le subject afin de permettre au component qui lui son souscrit

      }

   switchOnOne(index:number)
   {
      this.appareils[index].status= 'alumee';
      this.emitAppareilSubject(); //on fait emettre le subject afin de permettre au component qui lui son souscrit

   }

   switchOffOne(index:number)
      {
         this.appareils[index].status= 'eteint';
         this.emitAppareilSubject(); //on fait emettre le subject afin de permettre au component qui lui son souscrit

      }

}
