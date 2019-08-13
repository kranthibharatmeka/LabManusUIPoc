import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private _http: HttpClient) { }

  postCall(data: any) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
  
      return this._http.post('http://localhost:8080/create',JSON.stringify(data),httpOptions).pipe(
      tap(_ =>  {
      
      }));

}
}