import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { RegionComponent } from '../../infra/region/region.component';
import { ComponentMapperComponent } from '../../../_bridge/component-mapper/component-mapper.component';
import { DashboardFilterComponent } from '../../infra/dashboard-filter/dashboard-filter.component';

@Component({
  selector: 'app-inline-dashboard',
  templateUrl: './inline-dashboard.component.html',
  styleUrls: ['./inline-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, DashboardFilterComponent, forwardRef(() => RegionComponent), forwardRef(() => ComponentMapperComponent)]
})
export class InlineDashboardComponent implements OnInit {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;
  @Input() inlineProps;
  @Input() children;


  constructor() { }

  ngOnInit() {

  }
}
