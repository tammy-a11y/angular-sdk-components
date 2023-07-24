import { TestBed } from '@angular/core/testing';

import { AngSdkCompsService } from './ang-sdk-comps.service';

describe('AngSdkCompsService', () => {
  let service: AngSdkCompsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngSdkCompsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
