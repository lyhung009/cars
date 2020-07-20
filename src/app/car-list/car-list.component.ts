import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CarState} from './reducers/reducer';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private store: Store<{ car: CarState }>) {
  }

  ngOnInit(): void {
  }
}
