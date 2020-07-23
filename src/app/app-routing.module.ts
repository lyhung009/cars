import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarDetailComponent} from './car-list/car-detail/car-detail.component';
import {CarResolverService} from './car-list/services/car_resolver.service';


const routes: Routes = [
  {path: '', component: CarListComponent},
  {
    path: ':id', component: CarDetailComponent, resolve: {
      car: CarResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
