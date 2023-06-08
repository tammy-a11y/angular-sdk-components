import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ReferenceComponent } from '../../infra/reference/reference.component';
import { AttachmentComponent } from '../../widget/attachment/attachment.component';
import { FileUtilityComponent } from '../../widget/file-utility/file-utility.component';
import { UserReferenceComponent } from '../../field/user-reference/user-reference.component';
import { AppAnnouncementComponent } from '../../widget/app-announcement/app-announcement.component';
import { RepeatingStructuresComponent } from '../repeating-structures/repeating-structures.component';
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
import { TextAreaComponent } from '../../field/text-area/text-area.component';
import { TextContentComponent } from '../../field/text-content/text-content.component';
import { TextInputComponent } from '../../field/text-input/text-input.component';
import { UtilityComponent } from '../../widget/utility/utility.component';
import { ViewComponent } from '../../infra/view/view.component';
import { TodoComponent } from '../../widget/todo/todo.component';
import { PulseComponent } from '../../designSystemExtension/pulse/pulse.component';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PulseComponent,
    TodoComponent,
    UtilityComponent,
    TextInputComponent,
    TextContentComponent,
    TextAreaComponent,
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
    forwardRef(() => ViewComponent)
  ]
})
export class DefaultFormComponent implements OnInit {
  @Input() pConn$: any;
  @Input() formGroup$: FormGroup;

  configProps$: Object;
  arChildren$: Array<any>;
  divClass$: string;

  constructor() {}

  ngOnInit(): void {
    let configProps = this.pConn$.getConfigProps();
    let kids = this.pConn$.getChildren();

    let numCols = configProps.NumCols ? configProps.NumCols : '1';
    switch (numCols) {
      case '1':
        this.divClass$ = 'psdk-default-form-one-column';
        break;
      case '2':
        this.divClass$ = 'psdk-default-form-two-column';
        break;
      case '3':
        this.divClass$ = 'psdk-default-form-three-column';
        break;
      default:
        this.divClass$ = 'psdk-default-form-one-column';
        break;
    }

    // repoint children before getting templateArray
    // Children may contain 'reference' component, so we need to
    //  normalize them
    this.arChildren$ = ReferenceComponent.normalizePConnArray(kids[0].getPConnect().getChildren());
  }
}
