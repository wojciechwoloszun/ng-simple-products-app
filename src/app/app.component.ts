// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'personalwebangular';
// }

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav class="navbar navbar-expand navbar-light bg-light">
          <a class="navbar-brand">{{pageTitle}}</a>
          <ul class="nav nav-pills">
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
          <div class="container">
              <router-outlet></router-outlet>
          </div>
      </nav>
  `
})
export class AppComponent {
  pageTitle: string = 'Wojciech Wołoszun Personal Site';
}
