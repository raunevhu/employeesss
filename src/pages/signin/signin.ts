import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arrayEmp from '../arrEmp';
import {EmployeePage} from '../employee/employee';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login=function(role,password)
  {

    
      if(role == arrayEmp[2] && password == arrayEmp[4]){
        this.navCtrl.push(EmployeePage)
      }else{
        alert("Incorrect Username or Password")
      }
  }

}
