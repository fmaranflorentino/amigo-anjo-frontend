import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

const { protocol, domain } = env.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public basePath = `${protocol}${domain}`;

  constructor(
    private http: HttpClient
  ) { }

  public get<T>(url: string, option?: Object): Observable<T> {
    
    const request = this.http
      .get<T>(`${this.basePath}${url}`, option);

    return request;

  }

  public post<T>(url: string, body: Object, options?: Object): Observable<T> {

    const request = this.http
      .post<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public put<T>(url: string, body: Object, options?: Object): Observable<T> {

    const request = this.http
      .put<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public delete<T>(url: string, options?: Object): Observable<T> {
    
    const request = this.http
      .delete<T>(`${this.basePath}${url}`, options);

    return request;

  }
}
