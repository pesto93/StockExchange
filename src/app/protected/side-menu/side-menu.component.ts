import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector     : 'app-side-menu',
  templateUrl  : './side-menu.component.html',
  styleUrls    : ['./side-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideMenuComponent implements OnInit {
  showMenu  = false;

  constructor () {

  }

  ngOnInit () {
  }

}
