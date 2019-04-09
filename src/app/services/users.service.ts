import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/users';
  private putUrl = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}



private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl).pipe(
      tap(d => console.log('users:' + JSON.stringify(d))),
      catchError(this.handleError)
    );
  }

  getUser(id): Observable<user> {
    return this.getUsers().pipe(
      map((ps: user[]) => ps.find(p => p.id === id))
    );
  }

  add(user: user): number {
    this.http.post<user>(this.usersUrl, user, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
    return 0;
  }
  update(user: user): boolean {
    this.putUrl = this.usersUrl + '/' + user.id;
    this.http.patch(this.putUrl, user, this.httpOptions)
    .subscribe(d => console.log('put user:' + JSON.stringify(d)),
    e => console.log('error:' + e));
    return true;
  }

  delete(id: string){

  }

  private handleError(err) {
    let errMessage = '';
    if (err.error instanceof Error) {
      errMessage = `An error occurred ${err.error.message}`;
    } else {
      errMessage = `Server returned code: ${err.status}, error message is ${
        err.message
      }`;
    }
    console.log(errMessage);
    return throwError(errMessage);
  }
}
