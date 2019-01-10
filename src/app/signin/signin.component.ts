import { Component, OnInit } from '@angular/core';
import { Functions } from 'src/util/functions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  lang = null;

  constructor(
    private functions: Functions
  ) { 
    
    functions.getLanguage().then(value => {
      this.lang = value;
      console.log(this.lang);
    }).catch(error => {
      console.log(error);
    });
    
  }

  ngOnInit() {
  }

}
