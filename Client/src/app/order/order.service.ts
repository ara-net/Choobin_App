import { Observable } from 'rxjs';
import { API_ROUTE } from 'app/api-routes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from 'app/models/apiResult';
import { Order } from 'app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  Get(id: string = ''): Observable<ApiResult<Order>> {
    return this.http.get<ApiResult<Order>>(API_ROUTE.INVOICE.GET + id);
  }
  Add(order: Order): Observable<ApiResult<Order>> {
    return this.http.post<ApiResult<Order>>(API_ROUTE.INVOICE.POST, order)
  }

  UpdateStatus(order: Order): Observable<ApiResult<Order>> {
    return this.http.put<ApiResult<Order>>(API_ROUTE.INVOICE.UPDATE_STATUS, order)
  }

  SetPS(paymentData): Observable<ApiResult<Order>> {
    return this.http.put<ApiResult<Order>>(API_ROUTE.INVOICE.SAVE_PS, paymentData)
  }
}
