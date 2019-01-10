import { Component, OnInit } from '@angular/core';
import { Functions } from 'src/util/functions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  lang = null;

  constructor(
    private functions: Functions
  ) { 
    functions.getLanguage().then(value => {
      this.lang = value;
      //console.log(this.lang);
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
