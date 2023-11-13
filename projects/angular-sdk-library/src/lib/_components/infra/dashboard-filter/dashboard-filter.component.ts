import { Component, OnInit, Input, forwardRef, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ComponentMapperComponent } from '../../../_bridge/component-mapper/component-mapper.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { getFilterExpression } from '../../../_helpers/filterUtils';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, forwardRef(() => ComponentMapperComponent)]
})
export class DashboardFilterComponent implements OnInit, OnChanges {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;
  @Input() inlineProps;
  @Input() children;
  configProps$: Object;
  arChildren$: Array<any>;
  PCore$: any;
  private filterChangeSubject = new Subject<string>();
  constructor() {
    this.filterChangeSubject.pipe(
        debounceTime(500)
      ).subscribe((val) => this.fireFilterChange(val));
  }

  ngOnInit() {
    if (!this.PCore$) {
        this.PCore$ = window.PCore;
    }
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

  

  updateTmpData(filterData) {
    this.filterChangeSubject.next(filterData);
  }

  fireFilterChange(data: any) {
    const { event, field } = data;
    console.log('filterValue', data);
    const filterData = {
      filterId: field.filterId,
      filterExpression: getFilterExpression(event.target.value, field.name, field.metadata)
    };

    this.PCore$.getPubSubUtils().publish(
        this.PCore$.getConstants().PUB_SUB_EVENTS.EVENT_DASHBOARD_FILTER_CHANGE,
      filterData
    );
  };
  
}
