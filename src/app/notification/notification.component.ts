import {Component, TemplateRef, ViewChild} from '@angular/core';
import {NotificationService} from './notification.service';
import {Store} from '@ngrx/store';
import {CarState} from '../car-list/reducers/reducer';
import {loadFailed} from '../car-list/reducers/actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  @ViewChild('errorTemplate') public errorTemplate: TemplateRef<any>;

  constructor(public notificationService: NotificationService, private store: Store<{ carsInfo: CarState }>) {
    this.store.select(data => data.carsInfo.error)
      .subscribe(err => {
        if (!!err) {
          this.showError(err);
          // Clear the error in state
          this.store.dispatch(loadFailed({error: ''}));
        }
      });
  }

  showError(error: string): void {
    this.notificationService.show(error, {classname: 'bg-danger text-light', delay: 15000});
  }
}
