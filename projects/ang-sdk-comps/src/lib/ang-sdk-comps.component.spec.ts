import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSdkCompsComponent } from './ang-sdk-comps.component';

describe('AngSdkCompsComponent', () => {
  let component: AngSdkCompsComponent;
  let fixture: ComponentFixture<AngSdkCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngSdkCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngSdkCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
