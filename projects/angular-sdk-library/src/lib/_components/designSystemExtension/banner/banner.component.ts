import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ComponentMapperComponent } from '../../../_bridge/component-mapper/component-mapper.component';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule, forwardRef(() => ComponentMapperComponent)]
})
export class BannerComponent {
  @Input() pConn$: any;
  @Input() formGroup$: any;

  @Input() configProps$: Object;
  @Input() arChildren$: Array<any>;
  @Input() title: string;
  @Input() message: any;
  @Input() backgroundImage: string;
  @Input() layout$: string;

  constructor() {}

  ngOnInit(): void {}

  getUrl() {
    return `url(${this.backgroundImage})`;
  }
}
