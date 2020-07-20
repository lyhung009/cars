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

  @Input() data: Car = {
    make: 'Make Model Version',
    liked: true,
    sourcePath: 'https://voz.vn/data/avatars/m/1669/1669159.jpg',
    voted: 100,
    mileage: 1000,
    addedAt: ''
  };
  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faStarDisliked = faStar;
  faStarLiked = faStarLiked;

  constructor() {
  }

  ngOnInit(): void {
  }

}
