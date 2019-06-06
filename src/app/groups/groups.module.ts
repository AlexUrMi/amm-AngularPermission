import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupListComponent, GroupDetailComponent, GroupsComponent]
})
export class GroupsModule { }
