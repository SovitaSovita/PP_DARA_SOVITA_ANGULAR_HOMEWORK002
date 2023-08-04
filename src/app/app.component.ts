import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PP_DARA_SOVITA_ANGULAR_HOMEWORK002';
  isLogin:boolean = true

  onLoginHandler(){
    if(this.isLogin){
      this.isLogin = false
    }else{
      this.isLogin = true
    }
  }
}
