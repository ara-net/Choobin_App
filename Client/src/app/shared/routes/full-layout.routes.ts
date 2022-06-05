import { OrderListComponent } from './../../order/order-list/order-list.component';
import { NewOrderComponent } from './../../order/new-order/new-order.component';
import { StoreComponent } from './../../store/store/store.component';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from 'app/invoice/invoice-list/invoice-list.component';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { ProductsListComponent } from '../../products/products-list/products-list.component';
import { CategoriesListComponent } from 'app/categories/categories-list/categories-list.component';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: '',
    component: InvoiceListComponent,

    data: {
      title: 'Full Layout Page'
    }
  },
  {
    path: 'products',
    children: [
      { path: 'necklace', component: ProductsListComponent, data: { title: 'گردنبند' } },
      { path: 'bracelet', component: ProductsListComponent, data: { title: 'دستبند' } },
      { path: 'ring', component: ProductsListComponent, data: { title: 'انگشتر' } },
      { path: 'set', component: ProductsListComponent, data: { title: 'ست' } },
      { path: 'clock', component: ProductsListComponent, data: { title: 'ساعت' } },
      { path: 'decor', component: ProductsListComponent, data: { title: 'دکوری' } },
      { path: 'serving-board', component: ProductsListComponent, data: { title: 'تخته سرو' } },
    ]
  },
  { path: 'categories', component: CategoriesListComponent, data: { title: 'دسته بندی' } },
  { path: 'store', component: StoreComponent, data: { title: 'انبار' } },
  {
    path: 'order',
    children: [
      { path: 'new', component: NewOrderComponent, data: { title: 'ثبت سفارش جدید' } },
      { path: 'list', component: OrderListComponent, data: { title: 'لیست سفارشات' } }
    ]
  },
  {
    path: 'invoices',
    children: [
      { path: 'incoming', component: InvoiceListComponent, data: { title: 'وارده' } },
      { path: 'issued', component: InvoiceListComponent, data: { title: 'صادره' } }
    ]
  }
];
