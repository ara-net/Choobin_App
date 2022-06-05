import { CategoryService } from './../../categories/category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'app/models/product';
type FormMode = shared.util.customTypes.FormMode;
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnDestroy {
  @ViewChild('closeEditModal', null) closeEditModal: ElementRef<HTMLElement>;
  productList: Product[] = []
  url = '---'
  categories = [];
  currentProduct: Product = new Product();
  sub$: Subscription;
  formMode: FormMode = 'none'
  constructor(private productService: ProductService, categoryService: CategoryService, activatedRoute: ActivatedRoute) {
    this.sub$ = categoryService.GetAllCategories().subscribe(m => this.categories = m.data)
    this.sub$ = activatedRoute.data.subscribe(m => {
      this.url = m.title
      this.LoadData(m.title);
    })
  }

  LoadData(category) {
    this.sub$ = this.productService.GetProducts({ 'category': category })
      .subscribe(m => this.productList = m.data)
  }

  SetCurrentProduct(product) {
    this.formMode = 'edit';
    this.currentProduct = product;
  }

  Save(formData) {
    if (this.formMode == 'edit') {
      formData.id = this.currentProduct.id;
      this.productService.Update(formData).subscribe(m => {
        if (m.result)
          this.Reset();
      });
    }
    else
      this.productService.Add(formData).subscribe(m => {
        if (m.result)
          this.Reset();
      });
  }

  Add() {
    this.currentProduct = new Product();
    this.currentProduct.category = this.url;
    this.formMode = 'add';
  }

  Reset() {
    this.LoadData(this.url);
    this.currentProduct = new Product();
    this.closeEditModal.nativeElement.click();
    this.formMode = 'none';
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
