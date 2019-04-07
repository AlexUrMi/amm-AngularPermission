import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { iproduct, product } from '../models/product';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productUrl = 'localhost:3000/products';
  constructor(private http: HttpClient) { }

getProducts(): Observable<iproduct[]>{
  return this.http.get<iproduct[]>(this.productUrl)
  .pipe(
    tap(d => console.log('products:' + JSON.stringify(d))),
    catchError(this.handleError)
  );
}

getProduct(id): Observable<iproduct>{
  return this.getProducts()
  .pipe(
    map((ps: product[]) => ps.find(p => p.id === id) )
  );
}

private handleError(err) {
  let errMessage = '';
  if(err.error instanceof Error){
    errMessage = `An error occurred ${err.error.message}`;
  } else {
    errMessage =`Server returned code: ${err.status}, error message is ${err.message}`;
  }
  console.log(errMessage);
  return throwError(errMessage);
}

}
