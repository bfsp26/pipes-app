import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

import { MayusPipe } from './pipes/mayus.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    OrderComponent,
    MayusPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
