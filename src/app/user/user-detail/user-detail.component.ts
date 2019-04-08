import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { user } from 'src/app/models/user';
import {
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';


import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public pageTitle = 'User detail:';
  public user: user;
  public userForm: FormGroup;
  private userId: number;
  private routeSubscription: Subscription;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.routeSubscription = this.route.params.subscribe(
      pars => (this.userId = +pars['id'])
    );
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      isDeleted: [false, [Validators.required]]
    });

    this.userService.getProduct(this.userId)
    .subscribe(u => {
      this.user = u;
      this.userForm = this.formBuilder.group({
        id: [this.user.id, [Validators.required]],
        fname: [this.user.fname, [Validators.required]],
        lname: [this.user.lname, [Validators.required]],
        isDeleted: [this.user.isDeleted, [Validators.required]]
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  public onBack(){
    this.router.navigate(['/users']);
  }

}
