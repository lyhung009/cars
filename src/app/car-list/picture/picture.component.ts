import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements OnInit {
  @Input() pictureUrl = '/assets/images';
  @Input() id: number;
  @Input() index: number;

  @Input() clickable: boolean;

  readonly defaultPictureUrl: string = '/assets/images/default_image.png';

  constructor() {
  }

  ngOnInit(): void {
  }

}
