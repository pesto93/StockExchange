import { Component } from '@angular/core';


@Component({
  selector : 'app-root',
  template : `
    <app-side-menu></app-side-menu>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';
}
