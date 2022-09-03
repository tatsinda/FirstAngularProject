//creation du service d'authentification
export class AuthService {
  isAuth = false;

//creation d'une cpmmunication ansychrone pour l'authentification
  signIn(){
    return new Promise(
                (resolve, reject) =>{
        setTimeout(
                  () => {
                  this.isAuth = true;
                  resolve(true);
                  }, 2000
        );
        }
    );
  }
//methode de deconnection
  signOut(){
    this.isAuth = false;
  }

}
