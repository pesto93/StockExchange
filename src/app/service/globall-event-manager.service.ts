import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GloballEventManagerService {

  private _showSideMenu : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public showSideMenuEmitter : Observable<boolean> = this._showSideMenu.asObservable();

  constructor () { }

  showSideMenu (show : boolean) {
    this._showSideMenu.next(show);
  }

}
