import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
  export class UsersListComponent implements OnInit {

    constructor(private usersService: UsersService, private router: Router) { }

    public pageTitle = 'User list';
    private _listFilter: string;
    public filteredUsers: User[] = [];
    public users: User[] = [];

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    ngOnInit() {
      this.usersService.getUsers()
      .subscribe(u => {

        this.users = u;
      this.filteredUsers = this.users;
      });


    }
    performFilter(filterBy: string): User[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.users.filter((u: User) => (`${u.id}${u.lname}${u.fname}`).toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  public onDelete(user: User) {
    this.usersService.delete(user.id);
    this.router.navigate(['/users']);
  }
  }
