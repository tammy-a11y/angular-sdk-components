import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ReferenceComponent } from '../reference/reference.component';
import { CaseHistoryComponent } from '../../widget/case-history/case-history.component';
import { AttachmentComponent } from '../../widget/attachment/attachment.component';
import { FileUtilityComponent } from '../../widget/file-utility/file-utility.component';
import { UserReferenceComponent } from '../../field/user-reference/user-reference.component';
import { AppAnnouncementComponent } from '../../widget/app-announcement/app-announcement.component';
import { RepeatingStructuresComponent } from '../../template/repeating-structures/repeating-structures.component';
import { AutoCompleteComponent } from '../../field/auto-complete/auto-complete.component';
import { DropdownComponent } from '../../field/dropdown/dropdown.component';
import { RadioButtonsComponent } from '../../field/radio-buttons/radio-buttons.component';
import { PhoneComponent } from '../../field/phone/phone.component';
import { DecimalComponent } from '../../field/decimal/decimal.component';
import { CurrencyComponent } from '../../field/currency/currency.component';
import { UrlComponent } from '../../field/url/url.component';
import { EmailComponent } from '../../field/email/email.component';
import { PercentageComponent } from '../../field/percentage/percentage.component';
import { TimeComponent } from '../../field/time/time.component';
import { DateComponent } from '../../field/date/date.component';
import { DateTimeComponent } from '../../field/date-time/date-time.component';
import { IntegerComponent } from '../../field/integer/integer.component';
import { CheckBoxComponent } from '../../field/check-box/check-box.component';
import { TextContentComponent } from '../../field/text-content/text-content.component';
import { TextAreaComponent } from '../../field/text-area/text-area.component';
import { TextInputComponent } from '../../field/text-input/text-input.component';
import { UtilityComponent } from '../../widget/utility/utility.component';
import { ViewComponent } from '../view/view.component';
import { TodoComponent } from '../../widget/todo/todo.component';
import { PulseComponent } from '../../designSystemExtension/pulse/pulse.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PulseComponent,
    TodoComponent,
    ViewComponent,
    UtilityComponent,
    TextInputComponent,
    TextAreaComponent,
    TextContentComponent,
    CheckBoxComponent,
    IntegerComponent,
    DateTimeComponent,
    DateComponent,
    TimeComponent,
    PercentageComponent,
    EmailComponent,
    UrlComponent,
    CurrencyComponent,
    DecimalComponent,
    PhoneComponent,
    RadioButtonsComponent,
    DropdownComponent,
    AutoCompleteComponent,
    RepeatingStructuresComponent,
    AppAnnouncementComponent,
    UserReferenceComponent,
    FileUtilityComponent,
    AttachmentComponent,
    CaseHistoryComponent
  ]
})
export class RegionComponent implements OnInit {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;

  configProps$: Object;
  arChildren$: Array<any>;

  constructor() {}

  ngOnInit() {
    // console.log(`ngOnInit (no registerAndSubscribe!): Region`);

    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps());

    // The children may contain 'reference' components, so normalize the children...
    this.arChildren$ = ReferenceComponent.normalizePConnArray(this.pConn$.getChildren());
  }
}
