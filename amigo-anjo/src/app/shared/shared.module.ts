import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { ApiService } from './services/api/api.service';
import { DomService } from './services/dom/dom.service';



@NgModule({
  declarations: [SidenavComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SidenavComponent, HeaderComponent,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService,
        DomService,
      ]
    };
  }
 }
