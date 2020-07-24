import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification.component';
import {NotificationContainerComponent} from './notification-container/notification-container.component';
import {NotificationService} from './notification.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NotificationComponent,
    NotificationContainerComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [NotificationService],
  exports: [NotificationComponent]
})
export class NotificationModule {
}
