import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../services/sidenav/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavState;
  getState: Subscription;
  menuItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  constructor(
    private sidenav$: SidenavService
  ) { 
  }
  
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

  trackByMenu(index, item) {
    return item.id
  }

}
