import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: { animation: 'DashPage' }
  },
  {
    path: 'user',
    loadChildren: './my-friends/my-friends.module#MyFriendsModule',
    data: { animation: 'MyFriendsPage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
