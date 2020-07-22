import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements OnInit {
  readonly pictureUrl: string = '/assets/images';
  @Input() id: number;
  @Input() index: number;


  constructor() {
  }

  ngOnInit(): void {
  }

}
