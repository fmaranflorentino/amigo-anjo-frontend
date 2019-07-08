import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sideNavState = false;
  private getSideNavStatus: Subject<boolean> = new Subject();

  constructor() { 
    this.setInitialState(false);
  }
  
  setInitialState(state: boolean) {
    return new Promise(async (resolve, reject) => {

     await this.getSideNavStatus.next(state);
      resolve();
    })
  }

 
  toggleSideNav() {
    this.sideNavState = !this.sideNavState;

    this.getSideNavStatus.next(this.sideNavState);
  }

  getState(): Observable<boolean> {
    return this.getSideNavStatus.asObservable();
  }
}
