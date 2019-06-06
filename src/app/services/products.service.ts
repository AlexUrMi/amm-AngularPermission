import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct, Product } from '../models/product';
import { map, tap, catchError } from 'rxjs/operators';
import { BASE_URL } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productUrl = BASE_URL + '/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(d => console.log('products:' + JSON.stringify(d))),
      catchError(this.handleError)
    );
  }

  getProduct(id): Observable<IProduct> {
    return this.getProducts().pipe(map((ps: Product[]) => ps.find(p => p.id === id)));
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
