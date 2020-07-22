import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope, faPhoneAlt, faRoad} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  @Input() data: Car = {} as any;

  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faMail = faEnvelope;
  faCall = faPhoneAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
