import {Component, HostBinding, TemplateRef, ViewEncapsulation} from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationContainerComponent {
  @HostBinding('class.ngb-toasts') someField = true;

  constructor(public notificationService: NotificationService) {
  }

  isTemplate(toast): boolean {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
