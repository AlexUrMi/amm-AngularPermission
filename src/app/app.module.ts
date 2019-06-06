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
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { CoreComponent } from './core/core.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';


// const childrenRoutes: Routes = [
//   {path:'users', component: UsersListComponent},
//   {path: 'groups', component: GroupListComponent},
//   {path: '', redirectTo: 'users', pathMatch: 'full'}
// ];

const routes: Routes = [

  // {path: 'core', component: CoreComponent, children: childrenRoutes},
  {path: 'core', component: CoreComponent},
  {path: '', redirectTo: 'core', pathMatch: 'full'},
  {path: '**', redirectTo: 'notfound'}
];
@NgModule({
  declarations: [
    AppComponent,

    UsersListComponent,
    UsersDetailsComponent,
    WelcomeComponent,
    NotFoundComponent,
    GroupListComponent,
    GroupDetailComponent,
    CoreComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot(
      routes
      // {path: 'users', component: UserListComponent},
      // {path: 'users/:id', component: UserDetailComponent},
      // {path: 'welcome', component: WelcomeComponent},
      // {path: 'notfound', component: NotFoundComponent},
      // {path: 'groups', component: GroupListComponent},
      // {path: 'groups/:id', component: GroupDetailComponent},
      // {path: '', redirectTo: 'core', pathMatch: 'full'},
      // {path: 'core', component: CoreComponent, children: childrenRoutes},
      // {path: '**', redirectTo: 'notfound'}

    ),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    CoreModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [
    UsersListComponent,
    UsersDetailsComponent,
    GroupListComponent,
    GroupDetailComponent
  ]
})
export class AppModule { }
