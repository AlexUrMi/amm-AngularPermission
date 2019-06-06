import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { UserGroup } from '../models/userGroup';
import { BASE_URL } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private groupsUrl = BASE_URL + '/userGroups';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  public getGroups(): Observable<UserGroup[]> {
    return this.http.get<UserGroup[]>(this.groupsUrl).pipe(
      tap(g => console.log(`get groups ${JSON.stringify(g)}`)),
      catchError(this.handleError)
    );
  }

  public getGroup(id): Observable<UserGroup> {
    return this.http.get<UserGroup>(this.groupsUrl + '/' + id);
  }

  private handleError(err) {
    let errMessage = '';
    if (err.error instanceof Error) {
      errMessage = `An error occurred ${err.error.message}`;
    } else {
      errMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.log(errMessage);
    return throwError(errMessage);
  }
}
