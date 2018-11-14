import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  template: `
    <svg>
      <use attr.xlink:href="/assets/img/sprite.svg#{{icon}}"></use>
    </svg>
  `
})
export class SvgIconComponent {
  @Input() icon: string;
}