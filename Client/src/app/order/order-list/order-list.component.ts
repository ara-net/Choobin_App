import { OrderService } from './../order.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Order } from 'app/models/order';
import { Map, GetIndex } from '../../shared/util/utilites'

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  @ViewChild('closePaymentModal', null) closePaymentModal: ElementRef<HTMLElement>;
  @ViewChild('closeSendModal', null) closeSendModal: ElementRef<HTMLElement>;
  @ViewChild('paymentTrackingCode', null) paymentTrackingCode: ElementRef;
  @ViewChild('sendTrackingCode', null) sendTrackingCode: ElementRef;



  orderList: Order[]
  currentOrder: Order = new Order();
  constructor(private orderService: OrderService) {
    orderService.Get().subscribe(m => this.orderList = m.data);
  }

  SetCurrentOrder(order) {
    this.currentOrder = order;
  }
  UpdateStatus(order) {
    this.orderService.UpdateStatus(order)
      .subscribe(m => {
        if (m.result) {
          let index = GetIndex(this.orderList, '_id', m.data[0]._id);
          this.orderList[index] = m.data[0];
        }
      })
  }

  SavePS(ps) {
    let obj = {
      _id: this.currentOrder._id,
      ps: ps,
      trackingCode: ps == 'payment'
        ? this.paymentTrackingCode.nativeElement.value || '---'
        : this.sendTrackingCode.nativeElement.value || '---'
    };
    this.orderService.SetPS(obj)
      .subscribe(m => {
        if (m.result) {
          let index = GetIndex(this.orderList, '_id', m.data[0]._id);
          this.orderList[index] = m.data[0];
          ps == 'payment'
            ? this.closePaymentModal.nativeElement.click()
            : this.closeSendModal.nativeElement.click();
        }
      })
  }
}
