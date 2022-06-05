import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoiceList;

  constructor(invoiceService: InvoiceService) {
    invoiceService.GetInvoices()
      .subscribe(invoices => this.invoiceList = invoices)
  }
  ngOnInit() {
  }

}
