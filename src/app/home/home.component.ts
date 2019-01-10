import { Component, OnInit } from '@angular/core';
import { TOKEN, LANGUAGE, LANGUAGES } from '../../util/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token = null;

  constructor(
  ) { 
    this.token = localStorage.getItem(TOKEN);
  }

  ngOnInit() {
    
  }

}
