import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { MatButtonModule, MatIconModule } from '@angular/material';

import {
  SidenavComponent,
  HeaderComponent
} from './components';

import {
  ApiService,
  DomService,
  SidenavService,
  MiscellaneousService
} from './services';



@NgModule({
  declarations: [SidenavComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
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
        SidenavService,
        MiscellaneousService
      ]
    };
  }
 }
