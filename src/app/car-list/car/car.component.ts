import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {faCalendarAlt, faStar} from '@fortawesome/free-regular-svg-icons';
import {faRoad, faStar as faStarLiked} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() data: Car = {} as any;

  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faStarDisliked = faStar;
  faStarLiked = faStarLiked;

  constructor() {
  }

  ngOnInit(): void {
  }

}
