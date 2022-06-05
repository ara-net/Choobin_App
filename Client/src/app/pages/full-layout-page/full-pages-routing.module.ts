import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { InvoiceListComponent } from 'app/invoice/invoice-list/invoice-list.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
