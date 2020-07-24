import {Component, Input} from '@angular/core';
import {Car} from '../../model/car';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope, faPhoneAlt, faRoad} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {CarState} from '../reducers/reducer';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent {
  @Input() data: Car = {} as any;

  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faMail = faEnvelope;
  faCall = faPhoneAlt;

  times: number[] = [];

  next = -1;
  prev = -1;

  total = 0;

  constructor(private store: Store<{ carsInfo: CarState }>, private titleService: Title, private router: Router,
              private modalService: NgbModal) {
    this.store.select(data => data.carsInfo)
      .subscribe(data => {
        this.data = data.carDetail;
        this.times = Array(this.data.imagesCount).fill(0).map((x, i) => i + 1);
        this.titleService.setTitle(this.data.make);

        this.total = data.total;
        this.next = this.data.id + 1;
        this.prev = this.data.id - 1;
      });
  }

  clickPrev(): void {
    this.router.navigate(['/', this.prev]);
  }

  clickNext(): void {
    this.router.navigate(['/', this.next]);
  }

  openGalery(content): void {
    this.modalService.open(content);
  }
}
