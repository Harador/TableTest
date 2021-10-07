import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { MyCellDirective } from './directives/my-cell.directive';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    MyCellDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
