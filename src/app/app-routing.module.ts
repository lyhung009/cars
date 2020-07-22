import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarDetailComponent} from './car-list/car-detail/car-detail.component';


const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'carousel/detail/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
