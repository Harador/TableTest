import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorModule } from '../paginator/paginator.module';

import { TableComponent } from './components/table/table.component'



@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
  ],
  exports: [
    TableComponent,
  ]
})
export class TableModule { }
