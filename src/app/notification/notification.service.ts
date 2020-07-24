import {Injectable, TemplateRef} from '@angular/core';

@Injectable()
export class NotificationService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({textOrTpl, ...options});
  }

  remove(toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
