import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Car} from '../../model/car';
import {faCalendarAlt, faStar} from '@fortawesome/free-regular-svg-icons';
import {faRoad, faStar as faStarLiked} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnChanges {

  @Input() data: Car = {} as any;

  times: number[] = [];
  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faStarDisliked = faStar;
  faStarLiked = faStarLiked;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.times = Array(this.data.imagesCount).fill(0).map((x, i) => i + 1);
    }
  }
}
