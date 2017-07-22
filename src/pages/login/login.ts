import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../app/models/user";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user = {} as User; 

constructor(public navCtrl: NavController, public navParams: NavParams, private amuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  async login(user: User)
  {
    try {
    const result =  this.amuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result)
      {
        this.navCtrl.setRoot(HomePage);
      }
    }
  catch(e)
  {
    console.error(e);
  }
  }
  register()
  {
    this.navCtrl.push(RegisterPage);
  }

}
