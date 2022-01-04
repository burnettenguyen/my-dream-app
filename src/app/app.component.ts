import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //router outlet acts as a component placeholder in the main app template
  template: `
    <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
