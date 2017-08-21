import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

/*import 'assets/js/matrix.login.js';*/
@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private _router: Router) {
    console.log($.fn.jquery);
  }

  ngOnInit () {
  }


  private login (): void {
    this._router.navigate(['dashboard']);
  }
}
