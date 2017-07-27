import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { RegisterPage } from "../register/register";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={} as User;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User){

    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  register(){
    this.navCtrl.push(RegisterPage);
   // this.navCtrl
  }
}
