import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {CarComponent} from './car-list/car/car.component';
import {CarListModule} from './car-list/car-list.module';
import {FilterModule} from './filter/filter.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarListModule,
    FilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
