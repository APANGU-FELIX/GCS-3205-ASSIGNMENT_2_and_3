import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { Account } from '../../app/account/account.interface';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  account = {} as Account

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController, private afAuth: AngularFireAuth) {
  }

  async register() {
    try {  
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
    this.toast.create({
      message: "Account successfully created.",
      duration: 3000
    }).present();
    console.log(result);
  }
  catch (e){
    console.error(e);
    this.toast.create({
      message: e.message,
      duration: 3000
    }).present();
  }
}

}
