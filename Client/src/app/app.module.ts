import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ArchwizardModule } from 'angular-archwizard';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { CheckMelliCodeDirective } from './shared/directives/check-melli-code.directive';
import { UniqueUsernameValidatorDirective } from './shared/directives/unique-username-validator.directive';
import { SharedModule } from './shared/shared.module';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { StoreComponent } from './store/store/store.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, CheckMelliCodeDirective, UniqueUsernameValidatorDirective, InvoiceListComponent, ProductsListComponent, CategoriesListComponent, StoreComponent, NewOrderComponent, OrderListComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ArchwizardModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    PerfectScrollbarModule,
    DpDatePickerModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
