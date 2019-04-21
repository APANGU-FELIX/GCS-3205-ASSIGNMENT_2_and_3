import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AngularFireAuthModule
  ],
})
export class LoginPageModule {}
