import { API_ROUTE } from './../api-routes';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiResult } from 'app/models/apiResult';
import { Product } from 'app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetProducts(category={}): Observable<ApiResult<Product>> {
    let cat = JSON.stringify(category)
    return this.http.get<ApiResult<Product>>(API_ROUTE.PRODUCT.GET + cat)
  }

  Add(modifiedObject): Observable<ApiResult<Product>> {
    return this.http.post<ApiResult<Product>>(API_ROUTE.PRODUCT.POST, modifiedObject);
  }

  Update(modifiedObject): Observable<ApiResult<Product>> {
    return this.http.put<ApiResult<Product>>(API_ROUTE.PRODUCT.PUT, modifiedObject);
  }
}
