import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  fname: string = '';
  lname: string = '';
  email: string = '';
  password: string ='';

  constructor(private router: Router) {} 

  registerUser(){
    localStorage.clear();
    localStorage.setItem('fname',this.fname);
    localStorage.setItem('lname',this.lname);
    localStorage.setItem('email',this.email);
    localStorage.setItem('pass', this.password);

    this.router.navigate(['/login']);
  
  }

}
