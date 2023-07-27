import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegionComponent } from '../../infra/region/region.component';
import { ViewComponent } from '../../infra/view/view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-column-tab',
  templateUrl: './two-column-tab.component.html',
  styleUrls: ['./two-column-tab.component.scss'],
  standalone: true,
  imports: [CommonModule, RegionComponent, forwardRef(() => ViewComponent)]
})
export class TwoColumnTabComponent implements OnInit {
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
