import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSummaryItemComponent } from '../material-summary-item/material-summary-item.component';

@Component({
  selector: 'app-material-summary-list',
  templateUrl: './material-summary-list.component.html',
  styleUrls: ['./material-summary-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialSummaryItemComponent]
})
export class MaterialSummaryListComponent implements OnInit {
  @Input() arItems$: Array<any>;
  @Input() icon$: string;
  @Input() menuIconOverride$: string = '';
  @Input() menuIconOverrideAction$: any;

  PCore$: any;

  constructor() {}

  ngOnInit(): void {
    if (!this.PCore$) {
      this.PCore$ = window.PCore;
    }
  }
}
