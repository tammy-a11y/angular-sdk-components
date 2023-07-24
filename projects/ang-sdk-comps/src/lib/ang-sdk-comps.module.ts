import { NgModule } from '@angular/core';
import { AngSdkCompsComponent } from './ang-sdk-comps.component';
import { RootContainerComponent } from './_components/infra/root-container/root-container.component';
import { ViewContainerComponent } from './_components/infra/Containers/view-container/view-container.component';
import { TopAppComponent } from './_components/designSystemExtension/top-app/top-app.component';



@NgModule({
  declarations: [
    AngSdkCompsComponent
  ],
  imports: [
    RootContainerComponent,
    ViewContainerComponent,
    TopAppComponent,
  ],
  exports: [
    RootContainerComponent,
    ViewContainerComponent,
    TopAppComponent,
    AngSdkCompsComponent
  ]
})
export class AngSdkCompsModule { }
