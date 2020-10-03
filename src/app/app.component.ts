import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThijsThijssen.nl is awesome v2.0!';

  secret = "test";

  constructor() {}

  ngOnInit() {
  }
}
