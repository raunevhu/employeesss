import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ SigninPage} from '../signin/signin'
import arrayEmp from '../arrEmp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  register = function(name,surname,role,id,password)
  {
    arrayEmp[0]=name;
    arrayEmp[1]=surname;
    arrayEmp[2]=role;
    arrayEmp[3]=id;
    arrayEmp[4]=password;

    console.log(arrayEmp);

    if(arrayEmp != null)
    {
        this.navCtrl.setRoot(SigninPage);
    }
  }

  constructor(public navCtrl: NavController) {

  }

}
