import { Product } from 'app/models/product';
import { OrderService } from './../order.service';
import { ProductService } from './../../products/product.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../../models/order';
import { OrderItem } from 'app/models/order-item';
import { Distinct } from '../../shared/util/utilites'

@Component({
  selector: 'new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  @ViewChild('closeModal', null) closeModal: ElementRef<HTMLElement>

  currentOrder: Order = new Order();
  productList: Product[] = new Array();
  filteredProductList: Product[] = new Array();
  categories: string[] = new Array();
  searchOption = { name: '', code: '', category: '' }
  SelectedProduct: Product = new Product();
  index: number = -1;

  constructor(private productService: ProductService, private orderService: OrderService) {
    productService.GetProducts()
      .subscribe(m => {
        this.productList = m.data.sort((a, b) => a.name > b.name ? 1 : -1);
        this.filteredProductList = m.data.sort((a, b) => a.name > b.name ? 1 : -1);
        this.categories = Distinct(m.data.map(n => n.category)).sort();
      })
  }

  FilterProduct(key, value) {
    //this.searchOption[key] = value;

    if (key == 'category') {
      this.searchOption.name = '';
      this.searchOption.code = '';
      this.filteredProductList = this.productList
        .filter(m => m.category == this.searchOption.category)
    }
    else
      this.filteredProductList = this.filteredProductList
        .filter(m => m.name.startsWith(this.searchOption.name)
          && m.code.startsWith(this.searchOption.code))

    if (this.searchOption.name == ''
      && this.searchOption.code == ''
      && this.searchOption.category == '')
      this.filteredProductList = this.productList
  }

  Save(data: Order) {
    data.totalQty = data.items.reduce((a, b) => parseInt(a.toString()) + (parseInt(b._qty.toString()) || 0), 0)
    this.orderService.Add(data)
      .subscribe(m => {
        if (m.result)
          this.currentOrder.orderNumber = m.data[0].orderNumber;
      })
  }

  SelectProduct(product: Product) {
    this.currentOrder.items[this.index].name = product.name;
    this.currentOrder.items[this.index]._price = product.price;
    this.currentOrder.items[this.index].code = product.code;
    this.index = -1;
    this.closeModal.nativeElement.click();
  }

  ModalClosed() {
    this.index = -1;
  }

  SearchByCode(event: KeyboardEvent, code: string, index: number) {
    if (event.key == 'Enter' && code && code.length > 3) {
      this.productService.GetProducts({ 'code': code })
        .subscribe(m => {
          if (m.result) {
            this.currentOrder.items[index].name = m.data[0].name;
            this.currentOrder.items[index]._price = m.data[0].price;
          }
        })
    }

  }

  RemoveItem(index) {
    if (index != 0)
      this.currentOrder.items.splice(index, 1);
  }

  AddItem(event: MouseEvent) {
    if (event.x == 0) return;
    this.currentOrder.items.push(new OrderItem())
  }
  ngOnInit() {
  }

}
