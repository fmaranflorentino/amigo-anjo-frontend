import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule, MatIconModule } from '@angular/material';

import {
  SidenavComponent,
  HeaderComponent
} from './components';

import {
  ApiService,
  DomService,
  SidenavService
} from './services';



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
        SidenavService
      ]
    };
  }
 }
