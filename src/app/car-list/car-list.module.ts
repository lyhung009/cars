import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {UiToolkitModule} from '../ui-toolkit/ui-toolkit.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CarService} from './services/car.service';
import {EffectsModule} from '@ngrx/effects';
import {CarEffect} from './effects/car.effect';
import {CarListComponent} from './car-list.component';

@NgModule({
  declarations: [CarDetailComponent, CarListComponent, CarDetailComponent],
  imports: [
    CommonModule,
    UiToolkitModule,
    FontAwesomeModule,
    NgbCarouselModule,
    EffectsModule.forFeature([CarEffect])
  ],
  exports: [CarListComponent, CarDetailComponent],
  providers: [CarService]
})
export class CarListModule {
}
