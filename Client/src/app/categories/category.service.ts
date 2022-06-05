import { API_ROUTE } from './../api-routes';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiResult } from 'app/models/apiResult';
import { Category } from 'app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  GetAllCategories(): Observable<ApiResult<Category>> {
    return this.http.get<ApiResult<Category>>(API_ROUTE.CATEGORY.GET);
  }

  Add(modifiedObject: Category): Observable<ApiResult<Category>> {
    return this.http.post<ApiResult<Category>>(API_ROUTE.CATEGORY.POST, modifiedObject);
  }
  Update(modifiedObject: Category): Observable<ApiResult<Category>> {
    return this.http.put<ApiResult<Category>>(API_ROUTE.CATEGORY.PUT, modifiedObject);
  }
}
