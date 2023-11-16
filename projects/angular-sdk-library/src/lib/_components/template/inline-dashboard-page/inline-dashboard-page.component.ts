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
  filterComponents: any;
  inlineProps: any;
  children: any = [];
  filtersFormGroup$: FormGroup;
  constructor(private fb: FormBuilder) {
    this.filtersFormGroup$ = this.fb.group({ hideRequired: false });
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
    const arChildren$ = this.pConn$.getChildren();
    const allFilters = this.pConn$.getRawMetadata().children[1];
    const filterComponents = buildFilterComponents(this.pConn$, allFilters);
    this.inlineProps = this.configProps$;
    this.children[0] = arChildren$[0];
    this.children[1] = filterComponents;
  }
}
