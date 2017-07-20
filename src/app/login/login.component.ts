import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GloballEventManagerService } from '../service/globall-event-manager.service';
import * as $ from 'jquery/dist/jquery';
/*import 'assets/js/matrix.login.js';*/
@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private _router : Router,
               private globalEvent : GloballEventManagerService) {
  console.log($.fn.jquery);
  }

  ngOnInit () {
    this.globalEvent.showSideMenu(false);
  }


  private login () : void {
    this._router.navigate(['dashboard']).then(() => {
        this.globalEvent.showSideMenu(true);

      });
  }
}
