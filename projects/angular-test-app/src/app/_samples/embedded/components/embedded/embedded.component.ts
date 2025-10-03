import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { getSdkConfig, loginIfNecessary } from '@pega/auth/lib/sdk-auth-manager';

import { ProgressSpinnerService } from 'packages/angular-sdk-components/src/lib/_messages/progress-spinner.service';
import { compareSdkPCoreVersions } from 'packages/angular-sdk-components/src/lib/_helpers/versionHelpers';
import { getSdkComponentMap } from 'packages/angular-sdk-components/src/lib/_bridge/helpers/sdk_component_map';
import localSdkComponentMap from 'packages/angular-sdk-components/src/sdk-local-component-map';
import { initializeAuthentication } from '../../helpers/utils';

declare global {
  interface Window {
    myLoadMashup: Function;
  }
}

@Component({
  selector: 'app-embedded',
  templateUrl: './embedded.component.html',
  styleUrls: ['./embedded.component.scss'],
  standalone: false
})
export class EmbeddedComponent implements OnInit, OnDestroy {
  pConn$: typeof PConnect;

  bLoggedIn$ = false;
  bHasPConnect$ = false;
  isProgress$ = false;

  progressSpinnerSubscription: Subscription;

  bootstrapShell: any;

  constructor(private psservice: ProgressSpinnerService) {}

  ngOnInit() {
    this.initialize();

    // handle showing and hiding the progress spinner
    this.progressSpinnerSubscription = this.psservice.getMessage().subscribe(message => {
      this.showHideProgress(message.show);
    });
  }

  ngOnDestroy() {
    this.progressSpinnerSubscription.unsubscribe();
  }

  async initialize() {
    // Add event listener for when logged in and constellation bootstrap is loaded
    document.addEventListener('SdkConstellationReady', () => this.handleSdkConstellationReady());

    const { authConfig } = await getSdkConfig();

    initializeAuthentication(authConfig);

    // Login if needed, without doing an initial main window redirect
    const sAppName = window.location.pathname.substring(window.location.pathname.indexOf('/') + 1);
    loginIfNecessary({ appName: sAppName, mainRedirect: false });
  }

  handleSdkConstellationReady() {
    this.bLoggedIn$ = true;
    // start the portal
    this.startMashup();
  }

  startMashup() {
    PCore.onPCoreReady(async renderObj => {
      console.log('PCore ready!');

      // Check that we're seeing the PCore version we expect
      compareSdkPCoreVersions();

      // Initialize the SdkComponentMap (local and pega-provided)
      await getSdkComponentMap(localSdkComponentMap);
      console.log(`SdkComponentMap initialized`);

      // Don't call initialRender until SdkComponentMap is fully initialized
      this.initialRender(renderObj);
    });

    window.myLoadMashup('app-root', false); // this is defined in bootstrap shell that's been loaded already
  }

  initialRender(renderObj) {
    // Need to register the callback function for PCore.registerComponentCreator
    // This callback is invoked if/when you call a PConnect createComponent
    PCore.registerComponentCreator(c11nEnv => {
      return c11nEnv;
    });

    // Change to reflect new use of arg in the callback:
    const { props } = renderObj;

    this.pConn$ = props.getPConnect();

    this.bHasPConnect$ = true;

    this.showHideProgress(false);
  }

  showHideProgress(bShow: boolean) {
    this.isProgress$ = bShow;
  }
}
