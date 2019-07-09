import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFriendsComponent } from './components/my-friends/my-friends.component';

const routes: Routes = [
  { path: 'my-friends', component: MyFriendsComponent },
  { path: '', redirectTo: 'my-friends', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFriendsRoutingModule { }
