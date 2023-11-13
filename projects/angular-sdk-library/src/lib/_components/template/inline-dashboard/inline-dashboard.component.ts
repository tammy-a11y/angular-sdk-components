import { Component, OnInit, Input, forwardRef, SimpleChanges, OnChanges } from '@angular/core';
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
export class InlineDashboardComponent implements OnInit, OnChanges {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;
  @Input() inlineProps;
  @Input() children;
  configProps$: Object;
  arChildren$: Array<any>;

  constructor() {}

  ngOnInit() {
    console.log('InlineDashboardComponent inlineProps', this.inlineProps);
    this.updateSelf();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { children, inlineProps } = changes;
    console.log('changes', changes);
    if ((children && children.previousValue !== children.currentValue) || (inlineProps && inlineProps.previousValue !== inlineProps.currentValue)) {
      this.updateSelf();
    }
  }

  updateSelf() {
    // this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps());
    // this.arChildren$ = this.pConn$.getChildren();
  }
}
