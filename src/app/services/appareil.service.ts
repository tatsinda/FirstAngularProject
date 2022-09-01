export class AppareilService{
   appareils = [
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
      ];

   switchOnAll(){
      for(let appareil of this.appareils)
        {
          appareil.status= 'alumee';
        }
   }

   switchOffAll(){
         for(let appareil of this.appareils)
           {
             appareil.status= 'eteint';
           }
      }

   switchOnOne(index:number)
   {
      this.appareils[index].status= 'alumee';
   }

   switchOffOne(index:number)
      {
         this.appareils[index].status= 'eteint';
      }

}
