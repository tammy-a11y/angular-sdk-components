import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OneColumnComponent } from '../one-column/one-column.component';
import { RegionComponent } from '../../infra/region/region.component';
import { ViewComponent } from '../../infra/view/view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-column-tab',
  templateUrl: './one-column-tab.component.html',
  styleUrls: ['./one-column-tab.component.scss'],
  standalone: true,
  imports: [CommonModule, OneColumnComponent, RegionComponent, forwardRef(() => ViewComponent)]
})
export class OneColumnTabComponent implements OnInit {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;

  configProps$: Object;
  arChildren$: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps());
    this.arChildren$ = this.pConn$.getChildren();
  }
}
