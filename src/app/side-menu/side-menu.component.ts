import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GloballEventManagerService } from '../service/globall-event-manager.service';

@Component({
  selector     : 'app-side-menu',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './side-menu.component.html',
  styleUrls    : ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  showMenu  = false;

  constructor (private globalevent : GloballEventManagerService) {
    this.globalevent.showSideMenuEmitter.subscribe((mode : boolean) => {
      if (mode !== null) {
        this.showMenu = mode;
      }
    });
  }

  ngOnInit () {
  }

}
