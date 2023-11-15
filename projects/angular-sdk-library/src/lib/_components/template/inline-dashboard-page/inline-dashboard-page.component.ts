import { Component, OnInit, Input, forwardRef, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegionComponent } from '../../infra/region/region.component';
import { InlineDashboardComponent } from '../inline-dashboard/inline-dashboard.component';
import { buildFilterComponents } from '../../../_helpers/filterUtils';
@Component({
  selector: 'app-inline-dashboard-page',
  templateUrl: './inline-dashboard-page.component.html',
  styleUrls: ['./inline-dashboard-page.component.scss'],
  standalone: true,
  imports: [CommonModule, InlineDashboardComponent, forwardRef(() => RegionComponent)]
})
export class InlineDashboardPageComponent implements OnInit, OnChanges {
  @Input() pConn$: any;
  
  configProps$: Object;
  arChildren$: Array<any>;
  filterComponents: any;
  inlineProps: any;
  children: any = [];
  formGroup$: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup$ = this.fb.group({ hideRequired: false });
  }

  ngOnInit() {
    this.updateSelf();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { pConn$ } = changes;

    if (pConn$.previousValue && pConn$.previousValue !== pConn$.currentValue) {
      this.updateSelf();
    }
  }

  updateSelf() {
    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps());
    this.arChildren$ = this.pConn$.getChildren();
    const allFilters = this.pConn$.getRawMetadata().children[1];
    this.filterComponents = buildFilterComponents(this.pConn$, allFilters);
    this.inlineProps = this.configProps$;
    this.children[0] = this.arChildren$[0];
    this.children[1] = this.filterComponents;
  }
}