import { Component, OnInit, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { Utils } from '../../../_helpers/utils';
import { MaterialUtilityComponent } from '../../designSystemExtension/material-utility/material-utility.component';
import { ComponentMapperComponent } from '../../../_bridge/component-mapper/component-mapper.component';

declare const window: any;

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss'],
  standalone: true,
  imports: [MaterialUtilityComponent, forwardRef(() => ComponentMapperComponent)]
})
export class UtilityComponent implements OnInit, OnChanges {
  @Input() pConn$: any;

  PCore$: any;

  configProps$: any;
  headerIcon$: string;
  headerText$: string;
  headerIconUrl$: string;
  noItemsMessage$: string;

  constructor(private utils: Utils) {}

  ngOnInit(): void {
    if (!this.PCore$) {
      this.PCore$ = window.PCore;
    }

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

    this.headerIcon$ = this.configProps$['headerIcon'];
    this.headerIconUrl$ = this.utils.getSDKStaticContentUrl();
    this.headerText$ = this.configProps$['headerText'];
    this.noItemsMessage$ = this.configProps$['noItemsMessage'];
  }
}
