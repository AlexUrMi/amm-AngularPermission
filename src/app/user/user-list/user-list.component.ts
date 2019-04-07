import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public pageTitle = 'User list';
  private _listFilter: string;
  public filteredUsers: user[] = [];
  public users: user[] = [];

  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  ngOnInit() {
    this.usersService.getProducts()
    .subscribe(u => {

      this.users = u;
    this.filteredUsers = this.users;
    });


  }
  performFilter(filterBy: string): user[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((u: user) => (`${u.id}${u.lname}${u.fname}`).toLocaleLowerCase().indexOf(filterBy) !== -1);
}
}
