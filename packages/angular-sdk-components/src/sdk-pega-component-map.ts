import { forwardRef } from '@angular/core';
import { AutoCompleteComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/auto-complete/auto-complete.component';
import { CancelAlertComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/cancel-alert/cancel-alert.component';
import { CheckBoxComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/check-box/check-box.component';
import { CurrencyComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/currency/currency.component';
import { DateTimeComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/date-time/date-time.component';
import { DateComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/date/date.component';
import { DecimalComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/decimal/decimal.component';
import { DropdownComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/dropdown/dropdown.component';
import { EmailComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/email/email.component';
import { IntegerComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/integer/integer.component';
import { PercentageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/percentage/percentage.component';
import { PhoneComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/phone/phone.component';
import { RadioButtonsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/radio-buttons/radio-buttons.component';
import { SemanticLinkComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/semantic-link/semantic-link.component';
import { TextAreaComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/text-area/text-area.component';
import { TextContentComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/text-content/text-content.component';
import { TextInputComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/text-input/text-input.component';
import { ThreeColumnComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/three-column/three-column.component';
import { ThreeColumnPageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/three-column-page/three-column-page.component';
import { TimeComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/time/time.component';
import { UrlComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/url/url.component';
import { UserReferenceComponent } from '../../../projects/angular-sdk-library/src/lib/_components/field/user-reference/user-reference.component';
import { FlowContainerComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/Containers/flow-container/flow-container.component';
import { ModalViewContainerComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/Containers/modal-view-container/modal-view-container.component';
import { ViewContainerComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/Containers/view-container/view-container.component';
import { ActionButtonsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/action-buttons/action-buttons.component';
import { AssignmentCardComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/assignment-card/assignment-card.component';
import { AssignmentComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/assignment/assignment.component';
import { DeferLoadComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/defer-load/defer-load.component';
import { MultiStepComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/multi-step/multi-step.component';
import { NavbarComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/navbar/navbar.component';
import { ReferenceComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/reference/reference.component';
import { RegionComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/region/region.component';
import { RootContainerComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/root-container/root-container.component';
import { StagesComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/stages/stages.component';
import { SubTabsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/sub-tabs/sub-tabs.component';
import { ViewComponent } from '../../../projects/angular-sdk-library/src/lib/_components/infra/view/view.component';
import { AppShellComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/app-shell/app-shell.component';
import { CaseSummaryComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/case-summary/case-summary.component';
import { CaseViewComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/case-view/case-view.component';
import { DataReferenceComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/data-reference/data-reference.component';
import { DefaultFormComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/default-form/default-form.component';
import { DetailsThreeColumnComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/details-three-column/details-three-column.component';
import { DetailsTwoColumnComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/details-two-column/details-two-column.component';
import { DetailsSubTabsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/details-sub-tabs/details-sub-tabs.component';
import { DetailsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/details/details.component';
import { FieldGroupTemplateComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/field-group-template/field-group-template.component';
import { ListPageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/list-page/list-page.component';
import { ListViewComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/list-view/list-view.component';
import { MultiReferenceReadonlyComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/multi-reference-readonly/multi-reference-readonly.component';
import { NarrowWideFormComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/narrow-wide-form/narrow-wide-form.component';
import { OneColumnPageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/one-column-page/one-column-page.component';
import { OneColumnTabComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/one-column-tab/one-column-tab.component';
import { OneColumnComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/one-column/one-column.component';
import { PageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/page/page.component';
import { PromotedFiltersComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/promoted-filters/promoted-filters.component';
import { SimpleTableManualComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/simple-table-manual/simple-table-manual.component';
import { SimpleTableSelectComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/simple-table-select/simple-table-select.component';
import { SimpleTableComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/simple-table/simple-table.component';
import { SingleReferenceReadonlyComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/single-reference-readonly/single-reference-readonly.component';
import { TwoColumnPageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/two-column-page/two-column-page.component';
import { TwoColumnComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/two-column/two-column.component';
import { TwoColumnTabComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/two-column-tab/two-column-tab.component';
import { WideNarrowFormComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/wide-narrow-form/wide-narrow-form.component';
import { WideNarrowPageComponent } from '../../../projects/angular-sdk-library/src/lib/_components/template/wide-narrow-page/wide-narrow-page.component';
import { AppAnnouncementComponent } from '../../../projects/angular-sdk-library/src/lib/_components/widget/app-announcement/app-announcement.component';
import { AttachmentComponent } from '../../../projects/angular-sdk-library/src/lib/_components/widget/attachment/attachment.component';
import { CaseHistoryComponent } from '../../../projects/angular-sdk-library/src/lib/_components/widget/case-history/case-history.component';
import { FileUtilityComponent } from '../../../projects/angular-sdk-library/src/lib/_components/widget/file-utility/file-utility.component';
import { TodoComponent } from '../../../projects/angular-sdk-library/src/lib/_components/widget/todo/todo.component';
import { MaterialSummaryItemComponent } from '../../../projects/angular-sdk-library/src/lib/_components/designSystemExtension/material-summary-item/material-summary-item.component';
import { MaterialSummaryListComponent } from '../../../projects/angular-sdk-library/src/lib/_components/designSystemExtension/material-summary-list/material-summary-list.component';
import { MaterialVerticalTabsComponent } from '../../../projects/angular-sdk-library/src/lib/_components/designSystemExtension/material-vertical-tabs/material-vertical-tabs.component';
import { OperatorComponent } from '../../../projects/angular-sdk-library/src/lib/_components/designSystemExtension/operator/operator.component';
import { PulseComponent } from '../../../projects/angular-sdk-library/src/lib/_components/designSystemExtension/pulse/pulse.component';
import { MaterialDetailsFieldsComponent } from 'projects/angular-sdk-library/src/lib/_components/designSystemExtension/material-details-fields/material-details-fields.component';
import { ErrorBoundaryComponent } from 'projects/angular-sdk-library/src/lib/_components/infra/error-boundary/error-boundary.component';
import { FieldGroupListComponent } from 'projects/angular-sdk-library/src/lib/_components/template/field-group-list/field-group-list.component';
import { FieldValueListComponent } from 'projects/angular-sdk-library/src/lib/_components/template/field-value-list/field-value-list.component';
import { ConfirmationComponent } from 'projects/angular-sdk-library/src/lib/_components/template/confirmation/confirmation.component';
import { DetailsNarrowWideComponent } from 'projects/angular-sdk-library/src/lib/_components/template/details-narrow-wide/details-narrow-wide.component';
import { DetailsWideNarrowComponent } from 'projects/angular-sdk-library/src/lib/_components/template/details-wide-narrow/details-wide-narrow.component';

// pegaSdkComponentMap is the JSON object where we'll store the components that are
// the default implementations provided by the SDK. These will be used if there isn't
// an entry in the localSdkComponentMap

// NOTE: A few components have non-standard capitalization:
//  'reference' is what's in the metadata, not Reference
//  'Todo' is what's in the metadata, not ToDo
//  Also, note that "Checkbox" component is named/exported as CheckboxComponent

const pegaSdkComponentMap = {
  ActionButtons: ActionButtonsComponent,
  //   'ActionButtonsForFileUtil': ActionButtonsForFileUtil,
  AppAnnouncement: AppAnnouncementComponent,
  AppShell: AppShellComponent,
  Assignment: AssignmentComponent,
  AssignmentCard: forwardRef(() => AssignmentCardComponent),
  Attachment: AttachmentComponent,
  AutoComplete: AutoCompleteComponent,
  //   'Banner': Banner,
  //   'BannerPage': BannerPage,
  CancelAlert: CancelAlertComponent,
  CaseHistory: CaseHistoryComponent,
  CaseSummary: CaseSummaryComponent,
  //   'CaseSummaryFields': CaseSummaryFields,
  CaseView: CaseViewComponent,
  //   'CaseViewActionsMenu': CaseViewActionsMenu,
  Checkbox: CheckBoxComponent,
  Confirmation: ConfirmationComponent,
  Currency: CurrencyComponent,
  //   'DashboardFilter': DashboardFilter,
  DataReference: DataReferenceComponent,
  Date: DateComponent,
  DateTime: DateTimeComponent,
  Decimal: DecimalComponent,
  DefaultForm: DefaultFormComponent,
  DeferLoad: DeferLoadComponent,
  Details: DetailsComponent,
  DetailsFields: MaterialDetailsFieldsComponent,
  DetailsSubTabs: DetailsSubTabsComponent,
  DetailsThreeColumn: DetailsThreeColumnComponent,
  DetailsTwoColumn: DetailsTwoColumnComponent,
  Dropdown: DropdownComponent,
  Email: EmailComponent,
  ErrorBoundary: ErrorBoundaryComponent,
  FieldGroupList: FieldGroupListComponent,
  FieldGroupTemplate: FieldGroupTemplateComponent,
  FieldValueList: FieldValueListComponent,
  FileUtility: FileUtilityComponent,
  FlowContainer: FlowContainerComponent,
  //   'Followers': Followers,
  //   'InlineDashboard': InlineDashboard,
  //   'InlineDashboardPage': InlineDashboardPage,
  Integer: IntegerComponent,
  //   'LeftAlignVerticalTabs': LeftAlignVerticalTabs,
  ListPage: ListPageComponent,
  ListView: ListViewComponent,
  ModalViewContainer: forwardRef(() => ModalViewContainerComponent),
  MultiReferenceReadOnly: MultiReferenceReadonlyComponent,
  MultiStep: MultiStepComponent,
  //   'NarrowWide': NarrowWideFormComponent,
  NarrowWideDetails: DetailsNarrowWideComponent,
  NarrowWideForm: NarrowWideFormComponent,
  //   'NarrowWidePage': NarrowWidePage,
  NavBar: NavbarComponent,
  OneColumn: OneColumnComponent,
  OneColumnPage: OneColumnPageComponent,
  OneColumnTab: OneColumnTabComponent,
  Operator: OperatorComponent,
  Page: PageComponent,
  Percentage: PercentageComponent,
  Phone: PhoneComponent,
  PromotedFilters: PromotedFiltersComponent,
  Pulse: PulseComponent,
  //   'QuickCreate': QuickCreate,
  reference: ReferenceComponent,
  RadioButtons: RadioButtonsComponent,
  Region: forwardRef(() => RegionComponent),
  RootContainer: RootContainerComponent,
  SemanticLink: SemanticLinkComponent,
  SimpleTable: SimpleTableComponent,
  SimpleTableManual: SimpleTableManualComponent,
  SimpleTableSelect: SimpleTableSelectComponent,
  SingleReferenceReadOnly: SingleReferenceReadonlyComponent,
  Stages: StagesComponent,
  SubTabs: SubTabsComponent,
  SummaryItem: MaterialSummaryItemComponent,
  SummaryList: MaterialSummaryListComponent,
  TextArea: TextAreaComponent,
  TextContent: TextContentComponent,
  TextInput: TextInputComponent,
  ThreeColumn: ThreeColumnComponent,
  ThreeColumnPage: ThreeColumnPageComponent,
  Time: TimeComponent,
  Todo: TodoComponent,
  TwoColumn: TwoColumnComponent,
  TwoColumnPage: TwoColumnPageComponent,
  TwoColumnTab: TwoColumnTabComponent,
  URL: UrlComponent,
  UserReference: UserReferenceComponent,
  VerticalTabs: MaterialVerticalTabsComponent,
  View: ViewComponent,
  ViewContainer: ViewContainerComponent,
  //   'WideNarrow': WideNarrow,
  WideNarrowDetails: DetailsWideNarrowComponent,
  WideNarrowForm: WideNarrowFormComponent,
  WideNarrowPage: WideNarrowPageComponent
  //   'WssNavBar': WssNavBar,
  //   'WssQuickcreate': WssQuickCreate
};

export default pegaSdkComponentMap;
