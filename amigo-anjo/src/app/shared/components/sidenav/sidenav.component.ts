import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs';
import { SidenavService } from '../../services/sidenav/sidenav.service';

import { slideStateTrigger } from '../../animations/general';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ slideStateTrigger ]
})
export class SidenavComponent implements OnInit {
  sidenavState = false;
  getState: Subscription;
  menuItems = [
    { id: 1, label: 'Home', routerlink: '/' },
    { id: 2, label: 'Meus Anúncios', routerlink: 'user' },
    { id: 3, label: 'Procurar', routerLink: '' },
    { id: 4, label: 'FAQ', routerLink: '' }
  ];
  @Input() directionShow;

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

  getSidenavState(): Promise<any> {
    return new Promise<boolean>(async (resolve, reject) => {
      this.getState = await this.sidenav$.getState()
        .subscribe((resp: boolean) => {
          this.sidenavState = resp;
          resolve();
        }),
        error => { reject(error) };
    })
  }

  trackByMenu(index, item) {
    return item.id
  }

}
