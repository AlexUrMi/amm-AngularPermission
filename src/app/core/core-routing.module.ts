import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { GroupsComponent } from '../groups/groups.component';
import { NotFoundComponent } from '../home/not-found.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'groups', component: GroupsComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class CoreRoutingModule { }
