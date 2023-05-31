import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  fname: string ='';

  constructor (private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.fname = params['fname'];
    })
  }

}
