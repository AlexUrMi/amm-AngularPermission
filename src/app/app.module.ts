import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundComponent } from './home/not-found.component';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';


const usersChildrenRoutes: Routes = [
  {path: 'list', component: UsersListComponent},
  {path: ':id', component: UsersListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

const groupsChildrenRoutes: Routes = [
  {path: 'list', component: GroupListComponent},
  {path: ':id', component: GroupDetailComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

const routes: Routes = [
  {path: 'users', component: UsersListComponent, children: usersChildrenRoutes},
  {path: 'groups', component: GroupListComponent, children: groupsChildrenRoutes},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'notfound'}
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    UsersModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    GroupsModule,
    UsersModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
