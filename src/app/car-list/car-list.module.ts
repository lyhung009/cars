import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CarService} from './services/car.service';
import {EffectsModule} from '@ngrx/effects';
import {CarEffect} from './effects/car.effect';
import {CarListComponent} from './car-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/reducer';
import {CarComponent} from './car/car.component';
import {PictureComponent} from './picture/picture.component';
import {RouterModule} from '@angular/router';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {FilterModule} from './filter/filter.module';

@NgModule({
  declarations: [
    CarDetailComponent,
    CarListComponent,
    CarComponent,
    PictureComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    RouterModule,
    FontAwesomeModule,
    FilterModule,
    NgbCarouselModule,
    StoreModule.forFeature('carsInfo', reducer),
    EffectsModule.forFeature([CarEffect])
  ],
  exports: [CarListComponent],
  providers: [CarService]
})
export class CarListModule {
}
