import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFriendsRoutingModule } from './my-friends-routing.module';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';

@NgModule({
  declarations: [MyFriendsComponent],
  imports: [
    CommonModule,
    MyFriendsRoutingModule
  ]
})
export class MyFriendsModule { }
