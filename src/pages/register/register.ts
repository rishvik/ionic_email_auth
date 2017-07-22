import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../app/models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 user = {} as User; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afuth : AngularFireAuth) {
  }

 async register(user: User)
  {
    try{
    const result = await this.afuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    }
  catch(e)
  {
    console.error(e);
  }
  }
login()
{
  this.navCtrl.push(LoginPage);
}
}
