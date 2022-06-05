import { Good } from './../models/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from 'app/api-routes';
import { ApiResult } from 'app/models/apiResult';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  GetAllGoods(): Observable<ApiResult<Good>> {
    return this.http.get<ApiResult<Good>>(API_ROUTE.STORE.GET);
  }


  Add(good): Observable<ApiResult<Good>> {
    return this.http.post<ApiResult<Good>>(API_ROUTE.STORE.POST, good);
  }

  Update(good): Observable<ApiResult<Good>> {
    return this.http.put<ApiResult<Good>>(API_ROUTE.STORE.PUT, good);
  }

  By(good): Observable<ApiResult<Good>> {
    return this.http.put<ApiResult<Good>>(API_ROUTE.STORE.BY, good);
  }

}
