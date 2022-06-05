import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE } from '../api-routes';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  GetInvoices(id: number = -1) {
    if (id == -1)
      return this.http.get(API_ROUTE.INVOICE.GET)
    return this.http.get(API_ROUTE.INVOICE.GET + id)
  }
}
