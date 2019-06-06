import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { UserGroup } from 'src/app/models/userGroup';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  public pageTitle = 'User group list';
  private groups: UserGroup[] = [];
  public filteredGroups: UserGroup[] = [];

  private _filterList: string;
  public get filterList(): string {
    return this._filterList;
  }
  public set filterList(value: string) {
    this._filterList = value;
    this.filteredGroups = this.filterList ? this.perfomFilter(this.filterList) : this.groups;
  }

  constructor(private groupService: GroupsService) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe(g => {
      this.filteredGroups = g;
    });
  }
  private perfomFilter(filter: string): UserGroup[] {
    filter = filter.toLocaleLowerCase();
    return this.groups.filter((ug: UserGroup) => `${ug.id}${ug.name}`.toLocaleLowerCase().indexOf(filter) !== -1);
  }
}
