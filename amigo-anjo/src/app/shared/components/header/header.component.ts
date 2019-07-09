import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private sidenav$: SidenavService
  ) { }


  toggleSideNav() {
    this.sidenav$.toggleSideNav();
  }

}
