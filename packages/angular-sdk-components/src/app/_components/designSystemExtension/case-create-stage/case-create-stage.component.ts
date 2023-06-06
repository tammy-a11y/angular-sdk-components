import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { AngularPConnectService } from '../../../_bridge/angular-pconnect';
import { DefaultFormComponent } from '../../template/default-form/default-form.component';
import { NarrowWideFormComponent } from '../../template/narrow-wide-form/narrow-wide-form.component';
import { WideNarrowFormComponent } from '../../template/wide-narrow-form/wide-narrow-form.component';
import { OneColumnComponent } from '../../template/one-column/one-column.component';
import { TwoColumnComponent } from '../../template/two-column/two-column.component';
import { ThreeColumnComponent } from '../../template/three-column/three-column.component';

@Component({
  selector: 'app-case-create-stage',
  templateUrl: './case-create-stage.component.html',
  styleUrls: ['./case-create-stage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DefaultFormComponent,
    NarrowWideFormComponent,
    WideNarrowFormComponent,
    OneColumnComponent,
    TwoColumnComponent,
    ThreeColumnComponent
  ]
})
export class CaseCreateStageComponent implements OnInit {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;

  arChildren$: Array<any>;

  // For interaction with AngularPConnect
  angularPConnectData: any = {};

  constructor(private angularPConnect: AngularPConnectService) {}

  ngOnInit(): void {
    // First thing in initialization is registering and subscribing to the AngularPConnect service
    this.angularPConnectData = this.angularPConnect.registerAndSubscribeComponent(this, this.onStateChange);

    //this.updateSelf();
    this.checkAndUpdate();
  }

  ngOnDestroy() {
    if (this.angularPConnectData.unsubscribeFn) {
      this.angularPConnectData.unsubscribeFn();
    }
  }

  // Callback passed when subscribing to store change
  onStateChange() {
    this.checkAndUpdate();
  }

  checkAndUpdate() {
    // Should always check the bridge to see if the component should
    // update itself (re-render)
    const bUpdateSelf = this.angularPConnect.shouldComponentUpdate(this);

    // ONLY call updateSelf when the component should update
    if (bUpdateSelf) {
      this.updateSelf();
    }
  }

  updateSelf() {
    this.arChildren$ = this.pConn$.getChildren();
  }
}
