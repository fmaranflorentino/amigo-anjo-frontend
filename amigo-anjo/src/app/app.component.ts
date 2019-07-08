import { Component, OnInit } from '@angular/core';

import { SidenavService } from './shared/services/sidenav/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amigo-anjo';
  sidenavState;
  getState: Subscription;
  swipeAction = { UP: 'swipeup', DOWN: 'swipedown' };

  controlMenu = false;


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

  async getSidenavState() {
    return new Promise(async (resolve, reject) => {
      this.getState = await this.sidenav$.getState()
        .subscribe((resp) => {
          this.sidenavState = resp
          resolve();
        }),
        error => { reject(error) };
    })
  }

  swipe(action = this.swipeAction.UP) {
    console.log('swipe')
		if (action === this.swipeAction.UP) {
      this.controlMenu = true;
		} else if (action === this.swipeAction.DOWN) {
      this.controlMenu = false;
		}
	}
}
