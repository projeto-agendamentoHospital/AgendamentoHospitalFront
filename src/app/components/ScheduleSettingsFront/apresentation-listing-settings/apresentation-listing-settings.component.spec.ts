import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationListingSettingsComponent } from './apresentation-listing-settings.component';

describe('ApresentationListingSettingsComponent', () => {
  let component: ApresentationListingSettingsComponent;
  let fixture: ComponentFixture<ApresentationListingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationListingSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationListingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
