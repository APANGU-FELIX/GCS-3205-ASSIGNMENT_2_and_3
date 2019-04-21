import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { Account } from '../../app/account/account.interface';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private navParams: NavParams) {
  }

  async login() {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
  navigateToPage(pageName: string){
    pageName == 'HomePage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    
  }
  navigate(pageName: string){
    pageName == 'RegisterPage' ? 
    this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }
}
