import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl).pipe(
      tap(d => console.log('users:' + JSON.stringify(d))),
      catchError(this.handleError)
    );
  }

  getProduct(id): Observable<user> {
    return this.getProducts().pipe(
      map((ps: user[]) => ps.find(p => p.id === id))
    );
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
