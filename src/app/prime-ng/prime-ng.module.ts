import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
    SelectButtonModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
