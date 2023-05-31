import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  email: string ='';
  pass: string ='';
  storedName =localStorage.getItem('fname');

  constructor (private router: Router){}

  loginUser(){
    
    const storedEmail = localStorage.getItem('email');
    const storedPass = localStorage.getItem('pass');
    

    if(this.email === storedEmail && this.pass === storedPass ){
      this.router.navigate( ['/home'] , { queryParams: {fname:this.storedName} } )
    }else{
      alert('Incorrect Credentials...Try Again');
    }

  }


}
