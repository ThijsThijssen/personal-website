import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ThijsThijssen.nl is awesome v2.0!';

  secret = "test";

  constructor() {}

  ngOnInit() {
  }

  hello() {
    console.log('hello');
  }
}
