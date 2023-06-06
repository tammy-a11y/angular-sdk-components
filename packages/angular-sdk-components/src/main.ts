import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FieldGroupUtils } from './app/_helpers/field-group-utils';
import { AuthService } from './app/_services/auth.service';
import { ServerConfigService } from './app/_services/server-config.service';
import { Utils } from './app/_helpers/utils';
import { APP_BASE_HREF } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      DragDropModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatTableModule,
      MatBadgeModule,
      MatPaginatorModule,
      MatRippleModule,
      MatSortModule,
      MatSelectModule,
      MatTabsModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatAutocompleteModule,
      MatTooltipModule,
      MatDialogModule,
      MatStepperModule,
      NgxMatIntlTelInputComponent
    ),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto' } },
    { provide: APP_BASE_HREF, useValue: '/' },
    Utils,
    ServerConfigService,
    AuthService,
    FieldGroupUtils,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch((err) => console.error(err));
