import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = BASE_URL + '/users';
  private putUrl = BASE_URL + '/users';
  constructor(private http: HttpClient) {}



private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(d => console.log('users:' + JSON.stringify(d))),
      catchError(this.handleError)
    );
  }

  getUser(id): Observable<User> {
    return this.getUsers().pipe(
      map((ps: User[]) => ps.find(p => p.id === id))
    );
  }

  add(usr: User): number {
    this.http.post<User>(this.usersUrl, usr, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
    return 0;
  }
  update(usr: User): boolean {
    this.putUrl = this.usersUrl + '/' + usr.id;
    this.http.patch(this.putUrl, usr, this.httpOptions)
    .subscribe(d => console.log('put user:' + JSON.stringify(d)),
    e => console.log('error:' + e));
    return true;
  }

  delete(id: string) {
    const urlDelete = this.usersUrl + '/' + id;
    this.http.delete(urlDelete, this.httpOptions)
    .subscribe(v=>console.log('delete user' + JSON.stringify(v)));
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
