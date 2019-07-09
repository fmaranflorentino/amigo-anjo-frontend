import { Component, OnInit } from '@angular/core';

import { SidenavService } from './shared/services/sidenav/sidenav.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './shared/animations/general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  sidenavState;
  getState: Subscription;
  swipeAction = { UP: 'swipeup', DOWN: 'swipedown' };
  gestureBehavior = false;


  constructor(
    private sidenav$: SidenavService
  ) { }

  async ngOnInit() {

    try {
      await this.getSidenavState();
    } catch (error) {
      console.log(error);
    }

  }

  getSidenavState() {
    return new Promise<boolean>(async (resolve, reject) => {
      this.getState = await this.sidenav$
        .getState()
        .subscribe((resp) => {
          this.sidenavState = resp;
          resolve();
        }),
        error => { reject(error) };
    })
  }

  swipe(action = this.swipeAction.UP) {
    if (action === this.swipeAction.UP) {
      this.gestureBehavior = true;
    } else if (action === this.swipeAction.DOWN) {
      this.gestureBehavior = false;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
