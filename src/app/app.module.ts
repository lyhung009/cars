import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {CarListModule} from './car-list/car-list.module';
import {FilterModule} from './filter/filter.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NotificationModule} from './notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    CarListModule,
    FilterModule,
    FontAwesomeModule,
    NotificationModule,
    NgbModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
