import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { OrderComponent } from './pages/order/order.component';
import { BasicsComponent } from './pages/basics/basics.component';




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    OrderComponent,
    BasicsComponent
  ],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    OrderComponent,
    BasicsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
