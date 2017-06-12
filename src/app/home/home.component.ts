import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/js/excanvas.min.js';

import 'assets/js/fullcalendar.min.js';
import 'assets/js/jquery.dataTables.min.js';
import 'assets/js/jquery.flot.js';
import 'assets/js/jquery.flot.resize.js';
import 'assets/js/jquery.gritter.min.js';
import 'assets/js/jquery.peity.min.js';
import 'assets/js/jquery.ui.custom.js';
import 'assets/js/jquery.uniform.js';
import 'assets/js/jquery.validate.js';
import 'assets/js/jquery.wizard.js';
import 'assets/js/matrix.chat.js';
import 'assets/js/matrix.dashboard.js';
import 'assets/js/matrix.form_validation.js';
import 'assets/js/matrix.interface.js';
import 'assets/js/matrix.js';
import 'assets/js/matrix.popover.js';
import 'assets/js/select2.min.js';
import 'jquery/dist/jquery';
import { GloballEventManagerService } from '../service/globall-event-manager.service';

@Component({
  selector   : 'app-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private globalEvent : GloballEventManagerService, private _router : Router) { }

  ngOnInit () {
    this.globalEvent.showSideMenu(true);

  }

}
