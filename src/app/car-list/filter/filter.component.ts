import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @HostBinding('style.width') someField = '100% ';

  constructor() {
  }

  ngOnInit(): void {
  }

}
