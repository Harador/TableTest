import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { TableModule } from './table/table.module';

import { AppComponent } from './app.component';
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { MyCellDirective } from './directives/my-cell.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    MyCellDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
