import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { NotFoundComponent } from '../home/not-found.component';

const routes: Routes = [
{path: 'list', component: UsersListComponent},
{path: ':id', component: UsersDetailsComponent},
{path: '', redirectTo: 'list', pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
];
      // {path: 'users', component: UserListComponent},
      // {path: 'users/:id', component: UserDetailComponent},
      // {path: 'welcome', component: WelcomeComponent},
      // {path: 'notfound', component: NotFoundComponent},
      // {path: 'groups', component: GroupListComponent},
      // {path: 'groups/:id', component: GroupDetailComponent},
      // {path: '', redirectTo: 'core', pathMatch: 'full'},
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: []
})
export class UsersRoutingModule { }
